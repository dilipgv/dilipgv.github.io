(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
