
import { useEffect } from 'react';
import SuperHeader from '@/components/SuperHeader';
import SuperHeroSection from '@/components/SuperHeroSection';
import SuperAboutSection from '@/components/SuperAboutSection';
import SuperServicesSection from '@/components/SuperServicesSection';
import SuperCatalogSection from '@/components/SuperCatalogSection';
import SuperTestimonialsSection from '@/components/SuperTestimonialsSection';
import SuperLocationSection from '@/components/SuperLocationSection';
import SuperContactSection from '@/components/SuperContactSection';
import SuperFooter from '@/components/SuperFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

const SuperIndex = () => {
  useEffect(() => {
    // Configurar animações de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observar elementos com animação
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SuperHeader />
      <main className="flex-grow">
        <SuperHeroSection />
        <SuperAboutSection />
        <SuperServicesSection />
        <SuperCatalogSection />
        <SuperTestimonialsSection />
        <SuperLocationSection />
        <SuperContactSection />
      </main>
      <SuperFooter />
      <WhatsAppButton />
    </div>
  );
};

export default SuperIndex;
