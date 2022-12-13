export default function visibleAni(els, animation) {
  function addAni(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add(animation);
    }
  }

  if (Array.isArray(els)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        addAni(entry);
      });
    });

    els.forEach((projectEl) => {
      observer.observe(projectEl);
    });
  } else {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      addAni(entry);
    });

    observer.observe(els);
  }
}
