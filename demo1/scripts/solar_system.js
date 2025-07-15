class AdvancedSolarSystem {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(this.renderer.domElement);

    // 控制器
    this.controls = this.createControls();

    // 场景设置
    this.planets = [];
    this.moons = [];
    this.asteroids = [];
    this.orbits = [];
    this.followTarget = null;
    this.cameraMode = "free";
    this.timeScale = 1;
    this.showOrbits = true;

    // 创建场景
    this.createStarField();
    this.createSolarSystem();
    this.createAsteroidBelt();
    this.createUI();

    // 动画循环
    this.animate();

    // 事件监听
    this.setupEventListeners();
  }

  createControls() {
    // 模拟OrbitControls的基本功能
    const controls = {
      enabled: true,
      target: new THREE.Vector3(0, 0, 0),
      minDistance: 5,
      maxDistance: 1000,
      enableDamping: true,
      dampingFactor: 0.05,
      enableZoom: true,
      enableRotate: true,
      enablePan: true,
    };

    let isMouseDown = false;
    let mouseButton = -1;
    const mouse = new THREE.Vector2();
    const lastMouse = new THREE.Vector2();

    this.renderer.domElement.addEventListener("mousedown", (event) => {
      isMouseDown = true;
      mouseButton = event.button;
      lastMouse.set(event.clientX, event.clientY);
    });

    this.renderer.domElement.addEventListener("mousemove", (event) => {
      if (!isMouseDown) return;

      mouse.set(event.clientX, event.clientY);
      const deltaX = (mouse.x - lastMouse.x) * 0.01;
      const deltaY = (mouse.y - lastMouse.y) * 0.01;

      if (mouseButton === 0) {
        // 左键旋转
        this.camera.position.x =
          this.camera.position.x * Math.cos(deltaX) -
          this.camera.position.z * Math.sin(deltaX);
        this.camera.position.z =
          this.camera.position.x * Math.sin(deltaX) +
          this.camera.position.z * Math.cos(deltaX);
        this.camera.position.y += deltaY * 10;
        this.camera.lookAt(controls.target);
      }

      lastMouse.copy(mouse);
    });

    this.renderer.domElement.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    this.renderer.domElement.addEventListener("wheel", (event) => {
      const scale = event.deltaY > 0 ? 1.1 : 0.9;
      this.camera.position.multiplyScalar(scale);
    });

    return controls;
  }

  createStarField() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      sizeAttenuation: false,
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    this.scene.add(starField);
  }

  createSolarSystem() {
    // 太阳
    const sunGeometry = new THREE.SphereGeometry(5, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xfdb813,
      emissive: 0xfdb813,
      emissiveIntensity: 0.5,
    });
    this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
    this.scene.add(this.sun);

    // 太阳光源
    const sunLight = new THREE.PointLight(0xffffff, 2, 1000);
    sunLight.position.set(0, 0, 0);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    this.scene.add(sunLight);

    // 环境光
    const ambientLight = new THREE.AmbientLight(0x404040, 0.1);
    this.scene.add(ambientLight);

    // 行星数据
    const planetData = [
      {
        name: "水星",
        radius: 0.8,
        distance: 15,
        speed: 0.04,
        color: 0x8c7853,
        rotationSpeed: 0.02,
        inclination: 0.1,
      },
      {
        name: "金星",
        radius: 1.2,
        distance: 22,
        speed: 0.035,
        color: 0xffc649,
        rotationSpeed: -0.015,
        inclination: 0.05,
      },
      {
        name: "地球",
        radius: 1.3,
        distance: 30,
        speed: 0.03,
        color: 0x4fc3f7,
        rotationSpeed: 0.02,
        inclination: 0.08,
        hasAtmosphere: true,
        hasMoon: true,
      },
      {
        name: "火星",
        radius: 1.0,
        distance: 40,
        speed: 0.025,
        color: 0xd84315,
        rotationSpeed: 0.018,
        inclination: 0.12,
      },
      {
        name: "木星",
        radius: 3.5,
        distance: 65,
        speed: 0.015,
        color: 0xff8a65,
        rotationSpeed: 0.03,
        inclination: 0.02,
        hasRings: true,
      },
      {
        name: "土星",
        radius: 3.0,
        distance: 85,
        speed: 0.012,
        color: 0xffd54f,
        rotationSpeed: 0.025,
        inclination: 0.15,
        hasRings: true,
      },
    ];

    // 创建行星
    planetData.forEach((data) => {
      this.createPlanet(data);
    });

    // 设置初始相机位置
    this.camera.position.set(0, 20, 80);
    this.camera.lookAt(0, 0, 0);
  }

  createPlanet(data) {
    // 行星几何体
    const planetGeometry = new THREE.SphereGeometry(data.radius, 32, 32);

    // 创建纹理材质
    let planetMaterial;
    if (data.hasAtmosphere) {
      // 地球特殊处理
      planetMaterial = new THREE.MeshPhongMaterial({
        color: data.color,
        shininess: 10,
        transparent: true,
      });
    } else {
      planetMaterial = new THREE.MeshLambertMaterial({
        color: data.color,
      });
    }

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.castShadow = true;
    planet.receiveShadow = true;

    // 创建轨道组
    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.z = data.inclination;

    // 行星位置组
    const planetGroup = new THREE.Group();
    planet.position.x = data.distance;
    planetGroup.add(planet);
    orbitGroup.add(planetGroup);
    this.scene.add(orbitGroup);

    // 创建轨道线
    const orbitGeometry = new THREE.RingGeometry(
      data.distance - 0.1,
      data.distance + 0.1,
      64
    );
    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    });
    const orbitRing = new THREE.Mesh(orbitGeometry, orbitMaterial);
    orbitRing.rotation.x = Math.PI / 2;
    this.scene.add(orbitRing);
    this.orbits.push(orbitRing);

    // 添加大气层（如果有）
    if (data.hasAtmosphere) {
      const atmosphereGeometry = new THREE.SphereGeometry(
        data.radius * 1.1,
        32,
        32
      );
      const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x87ceeb,
        transparent: true,
        opacity: 0.2,
      });
      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      planet.add(atmosphere);
    }

    // 添加行星环（如果有）
    if (data.hasRings) {
      const ringGeometry = new THREE.RingGeometry(
        data.radius * 1.5,
        data.radius * 2.5,
        64
      );
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const rings = new THREE.Mesh(ringGeometry, ringMaterial);
      rings.rotation.x = Math.PI / 2;
      planet.add(rings);
    }

    // 添加月球（如果有）
    if (data.hasMoon) {
      const moonGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const moonMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);

      const moonOrbit = new THREE.Group();
      moon.position.x = data.radius + 3;
      moonOrbit.add(moon);
      planet.add(moonOrbit);

      this.moons.push({
        moon: moon,
        orbit: moonOrbit,
        speed: 0.1,
      });
    }

    // 存储行星信息
    this.planets.push({
      name: data.name,
      mesh: planet,
      group: planetGroup,
      orbit: orbitGroup,
      speed: data.speed,
      rotationSpeed: data.rotationSpeed,
      distance: data.distance,
      angle: Math.random() * Math.PI * 2,
    });
  }

  createAsteroidBelt() {
    const asteroidCount = 500;
    const asteroidBeltRadius = 52;

    for (let i = 0; i < asteroidCount; i++) {
      const size = Math.random() * 0.1 + 0.05;
      const geometry = new THREE.SphereGeometry(size, 8, 8);
      const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(0.1, 0.3, Math.random() * 0.5 + 0.3),
      });

      const asteroid = new THREE.Mesh(geometry, material);

      const angle = Math.random() * Math.PI * 2;
      const distance = asteroidBeltRadius + (Math.random() - 0.5) * 8;

      asteroid.position.x = Math.cos(angle) * distance;
      asteroid.position.z = Math.sin(angle) * distance;
      asteroid.position.y = (Math.random() - 0.5) * 2;

      this.scene.add(asteroid);

      this.asteroids.push({
        mesh: asteroid,
        angle: angle,
        distance: distance,
        speed: Math.random() * 0.001 + 0.0005,
        rotationSpeed: Math.random() * 0.02 + 0.01,
      });
    }
  }

  createUI() {
    // 创建GUI控制面板
    this.gui = new dat.GUI();

    const params = {
      timeScale: 1,
      showOrbits: true,
      showAsteroids: true,
      cameraFollow: "自由视角",
      sunIntensity: 0.5,
      ambientLight: 0.1,
      resetCamera: () => this.resetCamera(),
      screenshot: () => this.takeScreenshot(),
    };

    this.gui
      .add(params, "timeScale", 0.1, 5)
      .step(0.1)
      .onChange((value) => {
        this.timeScale = value;
        document.getElementById("time-scale").textContent = value + "x";
      });

    this.gui.add(params, "showOrbits").onChange((value) => {
      this.showOrbits = value;
      this.orbits.forEach((orbit) => (orbit.visible = value));
    });

    this.gui.add(params, "showAsteroids").onChange((value) => {
      this.asteroids.forEach((asteroid) => (asteroid.mesh.visible = value));
    });

    const planetNames = ["自由视角", "地球", "火星", "木星", "土星"];
    this.gui.add(params, "cameraFollow", planetNames).onChange((value) => {
      if (value === "自由视角") {
        this.followTarget = null;
        this.cameraMode = "free";
      } else {
        this.followPlanet(value);
      }
    });

    this.gui.add(params, "sunIntensity", 0, 2).onChange((value) => {
      this.sun.material.emissiveIntensity = value;
    });

    this.gui.add(params, "resetCamera");
    this.gui.add(params, "screenshot");
  }

  setupEventListeners() {
    // 窗口大小改变
    window.addEventListener("resize", () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // 键盘控制
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "Space":
          event.preventDefault();
          this.toggleSpeed();
          break;
        case "KeyR":
          this.resetCamera();
          break;
        case "KeyO":
          this.toggleOrbits();
          break;
        case "Digit1":
          this.followPlanet("水星");
          break;
        case "Digit2":
          this.followPlanet("金星");
          break;
        case "Digit3":
          this.followPlanet("地球");
          break;
        case "Digit4":
          this.followPlanet("火星");
          break;
        case "Digit5":
          this.followPlanet("木星");
          break;
        case "Digit6":
          this.followPlanet("土星");
          break;
      }
    });

    // 鼠标双击切换跟随
    this.renderer.domElement.addEventListener("dblclick", (event) => {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);

      const intersects = raycaster.intersectObjects(
        this.planets.map((planet) => planet.mesh)
      );

      if (intersects.length > 0) {
        const clickedPlanet = this.planets.find(
          (p) => p.mesh === intersects[0].object
        );
        if (clickedPlanet) {
          this.followPlanet(clickedPlanet.name);
        }
      }
    });
  }

  followPlanet(planetName) {
    const planet = this.planets.find((p) => p.name === planetName);
    if (planet) {
      this.followTarget = planet;
      this.cameraMode = "follow";
      document.getElementById("camera-mode").textContent = `跟随${planetName}`;
    }
  }

  resetCamera() {
    this.followTarget = null;
    this.cameraMode = "free";
    this.camera.position.set(0, 20, 80);
    this.camera.lookAt(0, 0, 0);
    document.getElementById("camera-mode").textContent = "自由视角";
  }

  toggleOrbits() {
    this.showOrbits = !this.showOrbits;
    this.orbits.forEach((orbit) => (orbit.visible = this.showOrbits));
  }

  toggleSpeed() {
    const speeds = [0.5, 1, 2, 5];
    const currentIndex = speeds.indexOf(this.timeScale);
    this.timeScale = speeds[(currentIndex + 1) % speeds.length];
    document.getElementById("time-scale").textContent = this.timeScale + "x";
  }

  takeScreenshot() {
    const link = document.createElement("a");
    link.download = "solar-system.png";
    link.href = this.renderer.domElement.toDataURL();
    link.click();
  }

  updateCamera() {
    if (this.followTarget && this.cameraMode === "follow") {
      const planet = this.followTarget;
      const worldPosition = new THREE.Vector3();
      planet.mesh.getWorldPosition(worldPosition);

      // 相机跟随行星，保持一定距离
      const offset = new THREE.Vector3(0, 5, 10);
      this.camera.position.copy(worldPosition).add(offset);
      this.camera.lookAt(worldPosition);
    }
  }

  updatePlanets() {
    this.planets.forEach((planet) => {
      // 公转
      planet.angle += planet.speed * this.timeScale;
      planet.orbit.rotation.y = planet.angle;

      // 自转
      planet.mesh.rotation.y += planet.rotationSpeed * this.timeScale;
    });

    // 更新月球
    this.moons.forEach((moon) => {
      moon.orbit.rotation.y += moon.speed * this.timeScale;
    });

    // 更新小行星带
    this.asteroids.forEach((asteroid) => {
      asteroid.angle += asteroid.speed * this.timeScale;
      asteroid.mesh.position.x = Math.cos(asteroid.angle) * asteroid.distance;
      asteroid.mesh.position.z = Math.sin(asteroid.angle) * asteroid.distance;
      asteroid.mesh.rotation.x += asteroid.rotationSpeed * this.timeScale;
      asteroid.mesh.rotation.y += asteroid.rotationSpeed * this.timeScale;
    });
  }

  updateEffects() {
    // 太阳光效
    const time = Date.now() * 0.001;
    this.sun.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.1;
    this.sun.rotation.y += 0.005 * this.timeScale;

    // 动态背景星空
    const starField = this.scene.children.find(
      (child) => child.type === "Points"
    );
    if (starField) {
      starField.rotation.y += 0.0001 * this.timeScale;
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.updatePlanets();
    this.updateCamera();
    this.updateEffects();

    this.renderer.render(this.scene, this.camera);
  }
}

// 启动太阳系
let solarSystem;
window.addEventListener("load", () => {
  solarSystem = new AdvancedSolarSystem();
});

// 添加粒子效果系统
class ParticleSystem {
  constructor(scene) {
    this.scene = scene;
    this.createCometTail();
    this.createSolarWind();
  }

  createCometTail() {
    // 彗星尾巴效果
    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random() * 0.5;
      colors[i * 3 + 2] = Math.random() * 0.3;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    this.particleSystem = new THREE.Points(particles, particleMaterial);
    this.scene.add(this.particleSystem);
  }

  createSolarWind() {
    // 太阳风效果
    const windGeometry = new THREE.BufferGeometry();
    const windCount = 500;
    const windPositions = new Float32Array(windCount * 3);

    for (let i = 0; i < windCount; i++) {
      const radius = Math.random() * 100 + 10;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 20;

      windPositions[i * 3] = Math.cos(angle) * radius;
      windPositions[i * 3 + 1] = height;
      windPositions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    windGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(windPositions, 3)
    );

    const windMaterial = new THREE.PointsMaterial({
      color: 0xffdd44,
      size: 1,
      transparent: true,
      opacity: 0.3,
    });

    this.solarWind = new THREE.Points(windGeometry, windMaterial);
    this.scene.add(this.solarWind);
  }

  update(timeScale) {
    // 更新粒子系统动画
    if (this.particleSystem) {
      this.particleSystem.rotation.y += 0.001 * timeScale;
    }

    if (this.solarWind) {
      this.solarWind.rotation.y += 0.002 * timeScale;
      // 太阳风向外扩散效果
      const positions = this.solarWind.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const distance = Math.sqrt(
          positions[i] * positions[i] + positions[i + 2] * positions[i + 2]
        );
        if (distance > 150) {
          // 重置到太阳附近
          const angle = Math.random() * Math.PI * 2;
          positions[i] = Math.cos(angle) * 10;
          positions[i + 2] = Math.sin(angle) * 10;
        } else {
          // 向外扩散
          positions[i] *= 1.005;
          positions[i + 2] *= 1.005;
        }
      }
      this.solarWind.geometry.attributes.position.needsUpdate = true;
    }
  }
}
