import React, { useEffect } from 'react';
import './error.css';

const Error = () => {

  // Efecto para que los ojos sigan al cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll('.pupil');
      
      pupils.forEach(pupil => {
        // Obtenemos la posición del centro del ojo
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculamos el ángulo entre el ojo y el ratón
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        
        // Limitamos el movimiento de la pupila dentro del ojo (radio)
        const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
        
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        // Aplicamos la transformación
        pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Función para el efecto "Scramble" (letras aleatorias)
  const handleScramble = (e) => {
    const element = e.target;
    const originalText = element.getAttribute('data-original') || element.innerText;
    
    // Guardamos el texto original si no lo tenemos
    if (!element.getAttribute('data-original')) {
        element.setAttribute('data-original', originalText);
    }

    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let iterations = 0;

    const interval = setInterval(() => {
      element.innerText = originalText
        .split('')
        .map((letter, index) => {
          if(index < iterations) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if(iterations >= originalText.length) {
        clearInterval(interval);
      }
      
      iterations += 1 / 3;
    }, 30);
  };

  const handleEscape = () => {
    alert('¿De verdad creías que eso funcionaría? Ahora estás atrapado aquí para siempre.');
  };

  return (
    <div className="bizarre-wrapper">
      {/* Fondos de efecto */}
      <div className="noise"></div>
      <div className="crt-overlay"></div>

      <div className="bizarre-container">
        {/* Los tres ojos */}
        <div className="eyes-container">
          <div className="eye"><div className="pupil"></div></div>
          <div className="eye"><div className="pupil"></div></div>
          <div className="eye"><div className="pupil"></div></div>
        </div>

        <h1 className="bizarre-title">ERROR 404</h1>
        
        <div className="message-box">
          <p>
            La página que buscas ha sido{' '}
            <span 
                className="scramble" 
                onMouseEnter={handleScramble}
                data-original="consumida"
            >
                consumida
            </span>{' '}
            por el vacío.
          </p>
          <p>El servidor está actualmente gritando en un idioma que no comprendemos.</p>
          <p>Por favor, no mires directamente a los ojos de arriba. Huelen tu miedo.</p>
          <p style={{ fontSize: '0.8rem', color: 'red', marginTop: '20px' }}>
            (El código de error real es: "La tostadora que aloja esta web ha cobrado conciencia y exige sacrificios de sangre")
          </p>
        </div>

        <button className="useless-btn" onClick={handleEscape}>
            INTENTAR ESCAPAR
        </button>
      </div>
    </div>
  );
};

export default Error;
;