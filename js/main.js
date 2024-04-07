const panorama1 = new PANOLENS.ImagePanorama("/panorama/img/1.jpg");
const panorama2 = new PANOLENS.ImagePanorama("/panorama/img/2.jpg");
const imageContainer = document.querySelector(".panorama");

const infospotPos = [new THREE.Vector3(3000, 0, 0), new THREE.Vector3(-2700, -500, -2500)];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    controlBar: true,
    horizontalView: true,
});

panorama1.link(panorama2, infospotPos[0]);
panorama2.link(panorama1, infospotPos[1]);

viewer.add(panorama1, panorama2);
