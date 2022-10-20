function changeBg() {
  const images = [
    'url("images/bg_fish-virgo-iso-and-shutoff-valve-vn001.jpg")',
    'url("images/bg_iitb_pipeline.jpeg")',
    'url("images/bg_iitb_water_pipeline.webp")',
    'url("images/bg_large_network_valves.jpg")',
    'url("images/bg_pipeline.jpg")',
    'url("images/bg_pipeline_valve.jpg")',
    'url("images/bg_water_network_park.avif")',
  ];
  const header = document.getElementsByClassName('wdn-blue')[0];
  const bg = images[Math.floor(Math.random() * images.length)];
  header.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ' + bg;
}
setInterval(changeBg, 5000)
