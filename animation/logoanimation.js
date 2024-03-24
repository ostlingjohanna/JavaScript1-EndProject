const divAnimation = {
    targets: '#logoh1',
    translateX: {
        value: 900,
        duration: 1000000
      },
      rotate: {
        value: 360,
        duration: 1600,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250


}

anime(divAnimation);