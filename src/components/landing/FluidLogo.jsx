import { useEffect, useRef } from "react";
import * as THREE from "three";

const SVG_INLINE = `<svg width="735" height="198" viewBox="0 0 735 198" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M167.618 158.058C167.169 150.829 166.433 124.636 158.836 122.776C150.803 120.815 140.426 150.654 138.031 157.421L131.594 175.674C127.154 188.247 116.801 196.474 104.14 196.949C91.6296 197.411 79.6926 190.407 75.0275 177.809L63.8888 147.683C61.3442 140.791 54.2094 122.014 46.925 121.914C39.6405 121.814 38.2809 145.086 37.9441 151.042C37.2207 164.338 39.1291 193.365 19.3962 194.414C4.62766 195.188 -0.0124483 179.033 2.50674e-05 165.599L0.187126 27.7028C0.187126 18.8884 3.85431 9.05026 11.5005 4.93023C24.7473 -2.19867 41.7485 -1.58691 54.1471 6.70309C60.6831 11.0728 64.6372 19.1755 67.0321 26.6041L87.1018 88.7167C89.8709 97.2938 95.5338 113.724 104.639 114.973C112.697 116.084 119.258 100.827 121.578 93.7356L144.841 22.534C152.65 -1.3497 181.85 -4.2462 197.092 4.93023C204.102 9.15014 208.256 17.9146 208.268 26.7539L208.306 176.249C208.306 182.803 203.042 188.746 199.462 191.593C194.585 195.475 186.128 196.624 180.665 193.728C172.906 189.608 169.102 181.48 168.566 172.89L167.643 158.071L167.618 158.058Z" fill="white"/><path d="M364.225 185.5C347.299 162.004 353.698 149.906 299.139 153.164C287.14 153.876 277.311 159.731 271.573 170.119C264.7 182.566 257.54 197.86 239.903 195.625C235.163 195.026 230.099 191.868 228.066 188.596C225.534 184.514 224.199 177.61 226.17 172.416L282.225 24.3071C287.726 9.77464 299.488 0.910333 313.721 0.797968C328.863 0.685604 340.576 9.23779 346.276 24.3695L401.883 171.879C405.051 180.281 402.057 189.945 394.71 193.678C383.921 199.159 371.198 195.176 364.238 185.513L364.225 185.5ZM326.506 94.9844C325.408 89.1789 322.701 83.673 318.286 80.7266C313.87 77.7801 308.045 79.5904 305.052 83.7479C302.407 87.4185 300.075 92.3875 299.588 96.7822C298.515 106.421 305.301 113.025 313.758 112.725C322.215 112.426 328.402 105.035 326.506 94.9844Z" fill="white"/><path d="M698.372 187.026C680.498 165.327 691.337 149.896 632.238 153.13C619.291 153.841 609.462 160.283 603.637 171.582C597.213 184.042 589.118 198.3 572.079 195.491C565.668 194.442 559.893 189.848 559.269 183.106C558.733 177.438 559.381 171.545 561.489 165.977L611.083 34.7223C614.052 26.8568 617.22 19.241 622.035 12.649C629.519 2.4113 642.105 -0.734906 654.603 1.61226C665.567 3.67228 674.66 12.3493 679.263 24.5471L731.452 162.805C735.518 173.58 738.848 190.372 725.028 194.854C715.286 198.013 704.971 195.066 698.36 187.026H698.372ZM650.574 80.2799C648.628 79.0064 642.94 79.2561 641.119 80.6919C636.716 84.1752 634.022 89.5437 632.837 94.8873C631.428 101.292 633.847 108.059 638.986 110.856C644.125 113.652 650.462 113.315 654.915 109.857C664.158 102.678 659.243 85.9356 650.574 80.2799Z" fill="white"/><path d="M492.325 158.199C510.199 158.199 542.443 155.777 543.715 177.526C544.551 191.784 529.184 198.051 518.444 197.989L445.762 197.577C432.527 197.502 420.254 187.763 420.241 173.993L420.066 34.723C420.066 30.5031 421.152 25.6215 421.563 21.6138C422.474 12.6871 428.024 5.45829 435.671 3.11112C443.704 0.639101 453.108 2.66166 458.26 10.0777C461.665 14.9843 464.01 21.876 464.023 28.3182L464.222 131.781C464.222 137.986 467.054 145.439 470.584 149.872C475.835 156.476 484.242 158.187 492.337 158.187L492.325 158.199Z" fill="white"/><path d="M711.523 24.9108V10.0195H716.331C717.494 10.0195 718.444 10.2181 719.182 10.6152C719.919 10.9981 720.465 11.5157 720.82 12.1681C721.174 12.8205 721.352 13.558 721.352 14.3805C721.352 15.1747 721.167 15.9051 720.799 16.5717C720.444 17.2383 719.891 17.7701 719.139 18.1672C718.388 18.5643 717.423 18.7628 716.246 18.7628H713.31V24.9108H711.523ZM719.395 24.9108L716.118 18.2523H718.118L721.501 24.9108H719.395ZM713.31 17.3588H716.204C717.338 17.3588 718.168 17.0823 718.693 16.5291C719.231 15.976 719.501 15.2669 719.501 14.4018C719.501 13.5225 719.239 12.8276 718.714 12.317C718.203 11.7923 717.359 11.5299 716.182 11.5299H713.31V17.3588Z" fill="white"/><path d="M729.312 16.8438C729.312 9.21585 723.128 3.03223 715.5 3.03223C707.872 3.03223 701.688 9.21585 701.688 16.8438C701.688 24.4717 707.872 30.6553 715.5 30.6553V32.5938C706.802 32.5938 699.75 25.5422 699.75 16.8438C699.75 8.14527 706.802 1.09375 715.5 1.09375C724.198 1.09375 731.25 8.14527 731.25 16.8438C731.25 25.5422 724.198 32.5938 715.5 32.5938V30.6553C723.128 30.6553 729.312 24.4717 729.312 16.8438Z" fill="white"/></svg>`;
const SVG_URL = null;
const ELEMENT_COLOR = "#E8FF70";
const VISCOSITY = 0.96;
const INTENSITY = 0.5;
const BRUSH_SIZE = 0.05;
const SIM_RES = 512;

export default function FluidLogo() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const area = containerRef.current;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setSize(area.clientWidth, area.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    area.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    function createRT() {
      return new THREE.WebGLRenderTarget(SIM_RES, SIM_RES, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        type: THREE.HalfFloatType,
      });
    }

    let velA = createRT();
    let velB = createRT();
    const fullScreenQuad = new THREE.PlaneGeometry(2, 2);

    const vertexShader = `
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `;

    const advectShader = new THREE.ShaderMaterial({
      uniforms: {
        uVelocity: { value: null },
        uDeltaTime: { value: 0.016 },
        uViscosity: { value: VISCOSITY },
      },
      vertexShader,
      fragmentShader: `
        uniform sampler2D uVelocity;
        uniform float uDeltaTime;
        uniform float uViscosity;
        varying vec2 vUv;
        void main() {
          vec2 vel = texture2D(uVelocity, vUv).xy;
          vec2 coord = vUv - vel * uDeltaTime * 0.1;
          vec2 newVel = texture2D(uVelocity, coord).xy;
          gl_FragColor = vec4(newVel * uViscosity, 0.0, 1.0);
        }
      `
    });

    const forceShader = new THREE.ShaderMaterial({
      uniforms: {
        uVelocity: { value: null },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uPrevMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uRadius: { value: BRUSH_SIZE },
        uStrength: { value: 1.0 },
        uAspect: { value: 1.0 }
      },
      vertexShader,
      fragmentShader: `
        uniform sampler2D uVelocity;
        uniform vec2 uMouse;
        uniform vec2 uPrevMouse;
        uniform float uRadius;
        uniform float uStrength;
        uniform float uAspect;
        varying vec2 vUv;
        void main() {
          vec2 vel = texture2D(uVelocity, vUv).xy;
          vec2 diff = uMouse - uPrevMouse;
          vec2 p = vUv;
          p.x *= uAspect;
          vec2 m = uMouse;
          m.x *= uAspect;
          float d = distance(p, m);
          float f = exp(-d * d / (uRadius * uRadius));
          vel += diff * f * uStrength * 25.0;
          gl_FragColor = vec4(vel, 0.0, 1.0);
        }
      `
    });

    const displayShader = new THREE.ShaderMaterial({
      uniforms: {
        uSource: { value: null },
        uVelocity: { value: null },
        uIntensity: { value: INTENSITY },
        uColor: { value: new THREE.Color(ELEMENT_COLOR).convertSRGBToLinear() },
        uAspect: { value: 1.0 }
      },
      vertexShader,
      fragmentShader: `
        uniform sampler2D uSource;
        uniform sampler2D uVelocity;
        uniform float uIntensity;
        uniform vec3 uColor;
        uniform float uAspect;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          if (uAspect > 1.0) {
            uv.x = (uv.x - 0.5) * uAspect + 0.5;
          } else {
            uv.y = (uv.y - 0.5) / uAspect + 0.5;
          }
          vec2 vel = texture2D(uVelocity, vUv).xy;
          vec2 displacedUv = uv - vel * uIntensity * 0.15;
          vec4 src = vec4(0.0);
          if (displacedUv.x >= 0.0 && displacedUv.x <= 1.0 && displacedUv.y >= 0.0 && displacedUv.y <= 1.0) {
            src = texture2D(uSource, displacedUv);
          }
          gl_FragColor = vec4(uColor, src.a);
        }
      `,
      transparent: true
    });

    const mesh = new THREE.Mesh(fullScreenQuad, displayShader);
    scene.add(mesh);

    // Source canvas (square)
    const sourceRes = 2048;
    const sourceCanvas = document.createElement("canvas");
    sourceCanvas.width = sourceRes;
    sourceCanvas.height = sourceRes;
    const sCtx = sourceCanvas.getContext("2d", { alpha: true });
    const sourceTexture = new THREE.CanvasTexture(sourceCanvas);
    sourceTexture.minFilter = THREE.LinearFilter;
    sourceTexture.magFilter = THREE.LinearFilter;

    async function updateSource() {
      sCtx.clearRect(0, 0, sourceRes, sourceRes);
      sCtx.fillStyle = "white";
      const blob = new Blob([SVG_INLINE], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      await new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
        img.src = url;
      });
      URL.revokeObjectURL(url);
      if (img.complete && img.naturalWidth > 0) {
        const scale = Math.min(sourceRes / img.width, sourceRes / img.height) * 0.8;
        const imgW = img.width * scale;
        const imgH = img.height * scale;
        sCtx.drawImage(img, (sourceRes - imgW) / 2, (sourceRes - imgH) / 2, imgW, imgH);
      }
      sourceTexture.needsUpdate = true;
    }

    // Interaction
    const mousePos = new THREE.Vector2(0.5, 0.5);
    const prevMousePos = new THREE.Vector2(0.5, 0.5);
    let isFirstMove = true;

    function updateMouse(clientX, clientY) {
      const rect = renderer.domElement.getBoundingClientRect();
      prevMousePos.copy(mousePos);
      mousePos.set(
        (clientX - rect.left) / rect.width,
        1.0 - (clientY - rect.top) / rect.height
      );
      if (isFirstMove) { prevMousePos.copy(mousePos); isFirstMove = false; }
    }

    const handleMouseMove = (e) => updateMouse(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) { e.preventDefault(); updateMouse(e.touches[0].clientX, e.touches[0].clientY); }
    };

    renderer.domElement.addEventListener("mousemove", handleMouseMove);
    renderer.domElement.addEventListener("touchmove", handleTouchMove, { passive: false });

    const handleResize = () => {
      renderer.setSize(area.clientWidth, area.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.032);
      const aspect = area.clientWidth / area.clientHeight;

      advectShader.uniforms.uVelocity.value = velA.texture;
      advectShader.uniforms.uDeltaTime.value = dt;
      mesh.material = advectShader;
      renderer.setRenderTarget(velB);
      renderer.render(scene, camera);

      forceShader.uniforms.uVelocity.value = velB.texture;
      forceShader.uniforms.uMouse.value.copy(mousePos);
      forceShader.uniforms.uPrevMouse.value.copy(prevMousePos);
      forceShader.uniforms.uAspect.value = aspect;
      mesh.material = forceShader;
      renderer.setRenderTarget(velA);
      renderer.render(scene, camera);

      displayShader.uniforms.uSource.value = sourceTexture;
      displayShader.uniforms.uVelocity.value = velA.texture;
      displayShader.uniforms.uAspect.value = aspect;
      mesh.material = displayShader;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);

      prevMousePos.copy(mousePos);
    }

    updateSource();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.domElement.removeEventListener("mousemove", handleMouseMove);
      renderer.domElement.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (area.contains(renderer.domElement)) area.removeChild(renderer.domElement);
      velA.dispose(); velB.dispose();
      sourceTexture.dispose();
      fullScreenQuad.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 left-0 z-40 pointer-events-none cursor-default"
      style={{ width: "47vw", height: "20vw", minWidth: 200, minHeight: 60, left: 0, bottom: 0 }}
    />
  );
}