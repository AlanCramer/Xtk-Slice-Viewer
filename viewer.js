window.onload = function() {

  // create and initialize a 3D renderer
  var r = new X.renderer3D();
  r.init();
  
  // create a new X.mesh
  volume = new X.volume();
  // .. and associate the .stl to it
  volume.file= 'data/daniel.nrrd';
  r.add(volume);
  // .. and start the loading/rendering
  r.render();
  
};
