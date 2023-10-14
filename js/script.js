const toggleButton = document.getElementById("theme-toggle");
const toggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const toggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    //Show light
    toggleLightIcon.classList.remove("hidden");
  } else {
    toggleDarkIcon.classList.remove("hidden");
 }

 toggleButton.addEventListener('click', toggleMode)

 function toggleMode(){
    //Toggle Icon
    toggleDarkIcon.classList.toggle('hidden');
    toggleLightIcon.classList.toggle('hidden');

    //Check if color-theme got any-value
    if(localStorage.getItem('color-theme')) {
        //Check if color-theme value 
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        if(document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark')
        }
    }
 }