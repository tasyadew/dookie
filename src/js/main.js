const panoramaImage = new PANOLENS.ImagePanorama('/assets/pano_image.png');
const imageContainer = document.querySelector(".pano-bg-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  cameraFov: 90,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  viewIndicator: false,
  indicatorSize: 50,
  controlBar: false
});

viewer.add(panoramaImage);
viewer.OrbitControls.enabled = false;
viewer.tweenControlCenter( new THREE.Vector3(0, -1, 0), 0 );