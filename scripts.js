let animationIntervals = [];

  function startMotion() {
    animationIntervals.forEach(clearInterval);
    animationIntervals = [];

    document.querySelectorAll('.pillar').forEach((pillar, index) => {
      const interval = setInterval(() => {
        const randomHeight = Math.floor(Math.random() * 50) + 50; 
        pillar.style.height = `${randomHeight}%`;
      }, Math.floor(Math.random() * 1000) + 500); 
      animationIntervals.push(interval);
    });
  }

  function resetMotion() {
    animationIntervals.forEach(clearInterval);
    document.querySelectorAll('.pillar').forEach(pillar => {
      pillar.style.height = '100%';
    });
  }

  function stopMotion() {
    animationIntervals.forEach(clearInterval);
  }