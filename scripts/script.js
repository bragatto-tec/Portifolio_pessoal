// Light Mode
const initLightMode = () => {
    const checkbox = document.querySelector('#checkbox');
    
    // Verifica se há uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

initLightMode()

// Open Menu

const initOpenMenu = () => {

    const menuBtn = document.querySelector('header .menu i')
    const closeBtn = document.querySelector('header .menu i:nth-child(2)')
    const menu = document.querySelector('.menuOpen');
    const header = document.querySelector('header')

    const close = () => {
        menu.classList.add('hidden')
        menuBtn.classList.remove('hidden')
        closeBtn.classList.add('hidden')
        document.body.style.overflow = 'visible';
        header.classList.remove('open')

    }

    const open = () => {
        menu.classList.remove('hidden')
        menuBtn.classList.add('hidden')
        closeBtn.classList.remove('hidden')
        document.body.style.overflow = 'hidden';
        header.classList.add('open')
    }

    // Open with Btn
    menuBtn.addEventListener('click', open)

    // Close with Btn
    closeBtn.addEventListener('click', close)

    // Close with Esc
    document.addEventListener('keydown', (event) => event.key === "Escape" ? close() : '');

    // Close with Links
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
        link.addEventListener('click', close)
    })

}

initOpenMenu()

// Scroll Animation (IntersectionObserver with fallback)

const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section')

    if ('IntersectionObserver' in window) {
        console.debug('[initAnimationScroll] Using IntersectionObserver')
        console.debug('[initAnimationScroll] sections found:', sections.length)
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -40% 0px', // trigger earlier when section is 40% into view
            threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // debug log for visibility changes
                console.debug('[initAnimationScroll]', entry.target.id || entry.target.className, 'isIntersecting=', entry.isIntersecting)
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                } else {
                    entry.target.classList.remove('active')
                }
            })
        }, observerOptions)

        sections.forEach(section => observer.observe(section))
    } else {
        // Fallback to previous scroll-based logic
        const windowHalfSize = window.innerHeight * 0.6

        const animateScroll = () => {
            sections.forEach(item => {
                const sectionTop = item.getBoundingClientRect().top

                const isSectionVisible = (sectionTop - windowHalfSize) < 0

                if (isSectionVisible) {
                    item.classList.add('active')
                } else {
                    item.classList.remove('active')
                }

            })

        }

        animateScroll()

        window.addEventListener('scroll', animateScroll)
    }

}

initAnimationScroll()

// Scroll Smooth

const initScrollSmooth = () => {

    const linksInternos = document.querySelectorAll('nav a')

    linksInternos.forEach(item => {

        const scrollToSection = (event) => {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)

            window.scrollTo({
                top: section.offsetTop - 100
            })


        }


        item.addEventListener('click', scrollToSection)

    })

}

initScrollSmooth()

// Typing Animation

const initTypingAnimation = () => {
    const title = document.querySelector('#sobre .banner h1')
    const span = document.querySelector('#sobre .banner span')
    const paragraph = document.querySelector('#sobre .banner p')

    const typingAnimation = (element) => {

        if (element == title) {
            element.innerHTML = 'Olá, eu sou o '
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 120 * index)
            })

        } else if (element == span) {
            element.innerHTML = 'Guilherme Miyamoto Bragatto :)'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })

        } else {
            element.innerHTML = 'Desenvolvedor Full-Stack'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })

        }

    }

    typingAnimation(title)
    setTimeout(() => typingAnimation(span), 1600)
    setTimeout(() => typingAnimation(paragraph), 3700)

}

initTypingAnimation()
