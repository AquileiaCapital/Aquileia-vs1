    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const submitBtn = form.querySelector('.form-submit');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        })
        .then(function(response) {
          if (!response.ok) throw new Error('Falha no envio');
          form.style.display = 'none';
          document.getElementById('formSuccess').style.display = 'block';
        })
        .catch(function() {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
          alert('N\u00e3o foi poss\u00edvel enviar sua mensagem agora. Tente novamente ou escreva diretamente para contato@aquileiacapital.com.br.');
        });
      });
    }

    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 60) {
        nav.style.padding = '14px 0';
      } else {
        nav.style.padding = '';
      }
    });
