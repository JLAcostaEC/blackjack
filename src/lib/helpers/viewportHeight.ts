// Better way to get the real Viewport Height in mobile devices
export default async function fixViewportHeight() {
  
  // Get current Height and set it to the CSS var: --vh
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  // Listen for window resize event to update the value of CSS var: --vh
  window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  });

}