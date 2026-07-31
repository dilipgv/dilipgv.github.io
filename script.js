(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // uptime ticker
  var uptimeEl = document.getElementById('uptime');
  var start = performance.now();
  if (!reduceMotion) {
    setInterval(function () {
      var seconds = Math.floor((performance.now() - start) / 1000);
      uptimeEl.textContent = 'uptime: ' + seconds + 's';
    }, 1000);
  } else {
    uptimeEl.textContent = 'uptime: 0s';
  }

  // event log reveal-on-scroll
  var jobs = document.querySelectorAll('[data-job]');

  function prepLines(job) {
    var lines = job.querySelectorAll('.job-lines li');
    lines.forEach(function (li) {
      if (!reduceMotion) li.classList.add('reveal-hidden');
    });
    return lines;
  }

  function revealJob(job) {
    var lines = job.querySelectorAll('.job-lines li');
    lines.forEach(function (li, i) {
      setTimeout(function () {
        li.classList.remove('reveal-hidden');
        li.classList.add('reveal-in');
        var stamp = document.createElement('span');
        stamp.className = 'stamp stamp-in';
        stamp.textContent = '✓';
        li.appendChild(stamp);
      }, i * 110);
    });
  }

  if (reduceMotion) {
    // content already fully visible, no stamps needed
  } else if ('IntersectionObserver' in window) {
    jobs.forEach(prepLines);
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revealJob(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    jobs.forEach(function (job) { observer.observe(job); });
  }
})();
