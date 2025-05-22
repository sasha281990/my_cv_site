/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cloudsContainer = document.querySelector('.clouds');
    const clouds = document.querySelectorAll('.cloud');

    clouds.forEach(cloud => {
        // Случайная задержка анимации
        const duration = Math.random() * 20 + 20; // от 20s до 40s
        cloud.style.animationDuration = `${duration}s`;
        
        // Случайный масштаб облака
        const scale = Math.random() * 0.5 + 0.75; // от 0.75 до 1.25
        cloud.style.transform = `scale(${scale})`;
        
        // Случайная прозрачность
        const opacity = Math.random() * 0.3 + 0.5; // от 0.5 до 0.8
        cloud.style.opacity = opacity;
    });
});
