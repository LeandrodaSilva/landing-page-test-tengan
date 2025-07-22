window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    header.classList.add('bg-header-scroll');
  } else {
    header.classList.remove('bg-header-scroll');
  }
});

function createDynamicContent() {
    const adBanner = document.getElementById('dynamic-ad');
    adBanner.innerHTML = `
                <div>
                    🎉 OFERTA ESPECIAL: 50% OFF em todos os produtos! 
                    <button>Aproveitar Agora</button>
                </div>
            `;

    const carousel = document.getElementById('testimonial-carousel');
    if (carousel) {
        
            const testimonials = [
                {
                    text: "Produto incrível! Superou todas as minhas expectativas.",
                    author: "Maria Silva",
                    rating: 5
                },
                {
                    text: "Qualidade excepcional e entrega rápida. Recomendo!",
                    author: "João Santos",
                    rating: 5
                },
                {
                    text: "Melhor smartphone que já tive. Vale cada centavo!",
                    author: "Ana Costa",
                    rating: 5
                }
            ];

            let currentTestimonial = 0;

            function showTestimonial(index) {
                const testimonial = testimonials[index];
                carousel.innerHTML = `
                <div class="carousel-title">O que nossos clientes dizem</div>
                    <div class="testimonials-holder">
                        <div class="testimonial-text">
                            "${testimonial.text}"
                        </div>
                        <div class="testimonial-author">
                            - ${testimonial.author}
                        </div>
                        <div class="testimonial-rating">
                            ${'⭐'.repeat(testimonial.rating)}
                        </div>
                    </div>
                `;
            }

            showTestimonial(currentTestimonial);

            setInterval(() => {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                showTestimonial(currentTestimonial);
            }, 3000);
       
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createDynamicContent();
});