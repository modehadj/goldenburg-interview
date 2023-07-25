var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 10,
      modifier: 40,
      initialSlide: 3,
      slideShadows: true
    },
  });
  
  function isMobile() {
    const minWidth = 600; // Minimum width for desktop devices
    const maxwidth = 1120;
    if (window.innerWidth < minWidth || screen.width < minWidth){
      return 'mobile';
    }else if (window.innerWidth < maxwidth || screen.width < maxwidth){
      return 'tablet';
    }else{
      return 'desktop';
    }
     
  }
  
  window.onresize = setScreenDevice;
  window.onload = setScreenDevice;
  
  function setScreenDevice() {
    const currentDevice = isMobile();
    if (currentDevice == 'mobile' ) {
      if (document.body.classList.contains('desktop')) {
        document.body.classList.remove('desktop');
      }
      if (document.body.classList.contains('tablet')) {
        document.body.classList.remove('tablet');
      }
      document.body.classList.add("mobile");
      console.log("Mobile device");
    } else if (currentDevice == 'tablet' ) {
      if (document.body.classList.contains('desktop')) {
        document.body.classList.remove('desktop');
      }
      if (document.body.classList.contains('mobile')) {
        document.body.classList.remove('mobile');
      }
      document.body.classList.add("tablet");
      console.log("Tablet device");
    }else {
      if (document.body.classList.contains('tablet')) {
        document.body.classList.remove('tablet');
      }
      if (document.body.classList.contains('mobile')) {
        document.body.classList.remove('mobile');
      }
      document.body.classList.add("desktop");
      console.log("Desktop device");
    }
    previousDevice = currentDevice;
  }