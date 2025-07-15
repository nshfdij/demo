//重新设置一下清除机制
//1.点击播放按钮，清除上一次播放还没结束的弹幕
//2.点击暂停时，弹幕也暂停
//3.拖动进度条时，前面的弹幕全部清除（拖动进度条后的同一时间清除全部之前的弹幕），重新根据当前进度条显示弹幕
//4.视频结束时，清除所有弹幕
class DanmuSystem {
  constructor(container) {
    this.container = container;
    this.displayedDanmus = new Set();
    this.lastTime = 0;
    this.eventsInitialized = false;
    this.activeDanmuElements = []; // 存储当前活跃的弹幕元素
    this.isPaused = false; // 弹幕暂停状态

    console.log(
      "容器尺寸:",
      container.offsetWidth,
      "x",
      container.offsetHeight
    );
    console.log("容器位置:", container.offsetTop, container.offsetLeft);

    this.danmuList = [];
    this.tracks = [];
    this.trackHeight = 20;
    this.maxTracks = Math.floor(this.container.offsetHeight / this.trackHeight);

    console.log("最大轨道数:", this.maxTracks);

    for (let i = 0; i < this.maxTracks; i++) {
      this.tracks.push({ occupied: false, lastTime: 0 });
    }
  }

  addDanmu(text, color = "#ffffff") {
    if (!text || typeof text !== "string") {
      console.warn("弹幕文本无效");
      return;
    }

    const sanitizedText = text.replace(/[<>]/g, "").substring(0, 50);
    const sanitizedColor = this.validateColor(color);

    const danmu = {
      text: sanitizedText,
      color: sanitizedColor,
      time: Date.now(),
      trackIndex: this.getAvailableTracks(),
    };

    console.log(danmu);
    if (danmu.trackIndex !== -1) {
      this.createDanmuElement(danmu);
    }
  }

  getAvailableTracks() {
    const now = Date.now();

    this.tracks.forEach((track, index) => {
      if (track.occupied && now - track.lastTime > 8000) {
        console.log(`强制释放轨道 ${index}，占用时间过长`);
        track.occupied = false;
        track.lastTime = 0;
      }
    });

    for (let i = 0; i < this.tracks.length; i++) {
      const track = this.tracks[i];
      if (!track.occupied) {
        track.occupied = true;
        track.lastTime = now;
        console.log(`分配空闲轨道: ${i}`);
        return i;
      }
    }

    for (let i = 0; i < this.tracks.length; i++) {
      const track = this.tracks[i];
      if (now - track.lastTime > 2000) {
        track.occupied = true;
        track.lastTime = now;
        console.log(`重用轨道: ${i}`);
        return i;
      }
    }

    console.warn("没有可用的弹幕轨道");
    return -1;
  }

  createDanmuElement(danmu) {
    if (danmu.trackIndex < 0 || danmu.trackIndex >= this.tracks.length) {
      console.warn("无效的轨道索引");
      return null;
    }

    const danmuEl = document.createElement("div");
    danmuEl.className = "danmu-item";
    danmuEl.style.color = danmu.color;
    danmuEl.textContent = danmu.text;
    danmuEl.style.top = this.trackHeight * danmu.trackIndex + "px";
    danmuEl.style.right = "-200px";

    // 添加弹幕元素的唯一标识
    danmuEl.danmuData = {
      text: danmu.text,
      trackIndex: danmu.trackIndex,
      startTime: Date.now(),
    };

    console.log("弹幕元素创建:", {
      text: danmu.text,
      top: danmuEl.style.top,
      right: danmuEl.style.right,
      color: danmuEl.style.color,
    });

    this.container.appendChild(danmuEl);

    // 将弹幕元素添加到活跃列表
    this.activeDanmuElements.push(danmuEl);

    // 根据暂停状态设置动画
    if (this.isPaused) {
      danmuEl.style.animationPlayState = "paused";
    } else {
      danmuEl.style.animation = "danmu-move 6s linear forwards";
    }

    let isCleanedUp = false;
    let timeoutId = null;

    const cleanup = () => {
      if (isCleanedUp) {
        return;
      }
      isCleanedUp = true;

      console.log(`清理弹幕: "${danmu.text}"`);

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      // 从活跃列表中移除
      const index = this.activeDanmuElements.indexOf(danmuEl);
      if (index > -1) {
        this.activeDanmuElements.splice(index, 1);
      }

      if (danmuEl && danmuEl.parentNode) {
        danmuEl.parentNode.removeChild(danmuEl);
      }

      if (this.tracks[danmu.trackIndex]) {
        this.tracks[danmu.trackIndex].occupied = false;
      }
    };

    danmuEl.addEventListener("animationend", cleanup);
    timeoutId = setTimeout(cleanup, 6100);

    // 存储cleanup函数，用于手动清理
    danmuEl.cleanup = cleanup;

    return danmuEl;
  }

  validateColor(color) {
    const colorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
    return colorRegex.test(color) ? color : "#ffffff";
  }

  // 1. 清除所有当前活跃的弹幕
  clearAllActiveDanmus() {
    console.log("清除所有活跃弹幕，数量:", this.activeDanmuElements.length);

    // 创建副本数组，避免在循环中修改原数组
    const elementsToClean = [...this.activeDanmuElements];

    elementsToClean.forEach((danmuEl) => {
      if (danmuEl && danmuEl.cleanup) {
        danmuEl.cleanup();
      }
    });

    this.activeDanmuElements = [];

    // 重置所有轨道状态
    this.tracks.forEach((track, index) => {
      track.occupied = false;
      track.lastTime = 0;
    });
  }

  // 2. 暂停/恢复所有弹幕动画
  pauseDanmus() {
    console.log("暂停所有弹幕动画");
    this.isPaused = true;

    this.activeDanmuElements.forEach((danmuEl) => {
      if (danmuEl && danmuEl.style) {
        danmuEl.style.animationPlayState = "paused";
      }
    });
  }

  resumeDanmus() {
    console.log("恢复所有弹幕动画");
    this.isPaused = false;

    this.activeDanmuElements.forEach((danmuEl) => {
      if (danmuEl && danmuEl.style) {
        danmuEl.style.animationPlayState = "running";
      }
    });
  }

  // 3. 重置弹幕状态
  resetDanmuState() {
    console.log("重置弹幕状态");
    this.displayedDanmus.clear();
    this.lastTime = 0;
    this.clearAllActiveDanmus();
  }

  // 4. 根据当前时间清除之前的弹幕显示记录
  clearPreviousDanmuRecords(currentTime) {
    // 清除时间 currentTime 之前的弹幕记录
    console.log(`清除时间 ${currentTime}s 之前的弹幕记录`);

    // 创建新的Set，只保留当前时间之后的弹幕记录
    const newDisplayedDanmus = new Set();

    // 遍历displayedDanmus，将时间大于currentTime的弹幕记录添加到newDisplayedDanmus中
    this.displayedDanmus.forEach((danmuKey) => {
      const [index, time] = danmuKey.split("-");
      if (parseInt(time) > currentTime) {
        newDisplayedDanmus.add(danmuKey);
      }
    });

    // 将displayedDanmus更新为newDisplayedDanmus
    this.displayedDanmus = newDisplayedDanmus;
    console.log(`保留了 ${this.displayedDanmus.size} 条未来弹幕记录`);
  }

  initVideoEvents(video) {
    if (this.eventsInitialized) {
      return;
    }

    console.log("初始化视频事件监听器");

    // 1. 播放事件 - 清除上一次播放还没结束的弹幕
    video.addEventListener("play", () => {
      console.log("视频开始播放，清除上次播放的弹幕");
      this.clearAllActiveDanmus();
      this.resetDanmuState();
      this.resumeDanmus();
    });

    // 2. 暂停事件 - 弹幕也暂停
    video.addEventListener("pause", () => {
      console.log("视频暂停，弹幕也暂停");
      this.pauseDanmus();
    });

    // 3. 进度条拖动事件 - 清除之前的弹幕，重新根据当前进度显示
    video.addEventListener("seeked", () => {
      const currentTime = Math.floor(video.currentTime);
      console.log(`进度条跳转到 ${currentTime}s，清除所有弹幕并重置状态`);

      // 清除所有当前弹幕
      this.clearAllActiveDanmus();

      // 清除之前时间的弹幕记录
      this.clearPreviousDanmuRecords(currentTime);

      this.lastTime = currentTime;

      // 如果视频没有暂停，恢复弹幕动画
      if (!video.paused) {
        this.resumeDanmus();
      }
    });

    // 4. 视频结束事件 - 清除所有弹幕
    video.addEventListener("ended", () => {
      console.log("视频播放结束，清除所有弹幕");
      this.clearAllActiveDanmus();
      this.resetDanmuState();
    });

    this.eventsInitialized = true;
  }

  processDanmuAtTime(data, currentTime) {
    // 如果弹幕被暂停，不处理新弹幕
    if (this.isPaused) {
      return;
    }

    data.forEach((item, index) => {
      const danmuKey = `${index}-${item.time}`;
      if (
        Math.abs(item.time - currentTime) <= 0.5 &&
        !this.displayedDanmus.has(danmuKey)
      ) {
        this.addDanmu(item.text, item.color);
        this.displayedDanmus.add(danmuKey);
        console.log(`显示弹幕: "${item.text}" 在时间: ${currentTime}s`);
      }
    });
  }

  // 加载弹幕数据
  loadDanmuData(data) {
    // 获取视频元素
    const video = document.querySelector("video");

    // 初始化视频事件
    this.initVideoEvents(video);

    // 初始化轨道
    if (this.timeUpdateHandler) {
      // 移除时间更新事件
      video.removeEventListener("timeupdate", this.timeUpdateHandler);
    }

    // 定义时间更新事件处理函数
    this.timeUpdateHandler = () => {
      // 获取当前视频时间
      const currentTime = Math.floor(video.currentTime);

      // 检测到时间跳跃
      if (
        currentTime < this.lastTime ||
        Math.abs(currentTime - this.lastTime) > 2
      ) {
        console.log("检测到时间跳跃");
        // 不在这里重置状态，让seeked事件处理
      }

      // 更新上次时间
      this.lastTime = currentTime;
      // 处理当前时间弹幕
      this.processDanmuAtTime(data, currentTime);
    };

    // 添加时间更新事件
    video.addEventListener("timeupdate", this.timeUpdateHandler);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".danmu-container");
  console.log("DOM加载完成，容器:", container);

  if (!container) {
    console.error("找不到弹幕容器！");
    return;
  }

  const danmuSystem = new DanmuSystem(container);
  const danmuData = [
    { time: 0, text: "开始啦", color: "#ffffff", displayed: false },
    { time: 2, text: "好漂亮啊", color: "#ff0000", displayed: false },
    { time: 4.5, text: "666", color: "#00c8ff", displayed: false },
    { time: 8, text: "这个镜头太棒了", color: "#ff00d4", displayed: false },
  ];

  danmuSystem.loadDanmuData(danmuData);

  window.sendDanmu = function () {
    const input = document.querySelector("#danmu-input");
    const text = input.value.trim();

    if (text) {
      danmuSystem.addDanmu(text);
      input.value = "";
    }
  };

  const danmuInput = document.getElementById("danmu-input");
  if (danmuInput) {
    danmuInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendDanmu();
      }
    });
  }
});
