/**
 * Quantum Rank LLC — Premium Growth Agency
 * Interactive features
 */

document.addEventListener('DOMContentLoaded', function() {

    // ---- Mobile Nav ----
    var menuBtn = document.getElementById('menuBtn');
    var navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                navLinks.classList.remove('open');
            });
        });
    }

    // ---- Form (demo only) ----
    var submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            var email = document.getElementById('email').value.trim();
            if (!email || email.indexOf('@') < 0) {
                document.getElementById('email').focus();
                return;
            }
            document.getElementById('formView').style.display = 'none';
            document.getElementById('successView').style.display = 'block';
        });
    }

    // ---- Scroll Reveal ----
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function(el) {
        io.observe(el);
    });

    // ---- Stat Count-up ----
    var counted = false;
    var statsSection = document.querySelector('.stats');

    function runCounts() {
        document.querySelectorAll('.stat .num').forEach(function(el) {
            var to = parseFloat(el.dataset.to);
            var dec = parseInt(el.dataset.decimals || '0');
            var pre = el.dataset.prefix || '';
            var suf = el.dataset.suffix || '';
            var start = null;
            var dur = 1400;

            function step(t) {
                if (!start) start = t;
                var p = Math.min((t - start) / dur, 1);
                var val = (to * p).toFixed(dec);
                el.innerHTML = pre + val + '<span class="u">' + suf + '</span>';
                if (p < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    }

    if (statsSection) {
        var io2 = new IntersectionObserver(function(entries) {
            entries.forEach(function(e) {
                if (e.isIntersecting && !counted) {
                    counted = true;
                    runCounts();
                }
            });
        }, { threshold: 0.4 });
        io2.observe(statsSection);
    }

    console.log('🚀 Quantum Rank LLC — ready.');
});