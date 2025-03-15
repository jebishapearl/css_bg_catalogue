// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainTabs = document.querySelectorAll('.main-tab');
    const subtabs = document.querySelectorAll('.subtabs');
    const subTabs = document.querySelectorAll('.sub-tab');
    const body = document.body;

    // Show the first set of subtabs by default
    if (mainTabs.length > 0 && subtabs.length > 0) {
        const firstTabName = mainTabs[0].dataset.tab;
        const firstSubtabs = document.getElementById(`${firstTabName}-subtabs`);
        if (firstSubtabs) {
            firstSubtabs.classList.add('active');
        }
    }

    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            subtabs.forEach(st => {
                st.classList.remove('active');
                if (st.id === `${tabName}-subtabs`) {
                    st.classList.add('active');
                }
            });
        });
    });

    subTabs.forEach(subTab => {
        subTab.addEventListener('click', () => {
            const bgName = subTab.dataset.bg;

            if (bgName === 'coquette-1') {
                body.style.background = 'linear-gradient(to bottom right,#e09bba, #f8d1d1, #f9e4e4)';
            }
            // Placeholders for other backgrounds
            else if (bgName === 'rosegold-1') {
                body.style.background = 'linear-gradient(135deg, #FFDAB9, #FFE4E1)'; // Example Placeholder
            }
            else if (bgName === 'rosegold-2') {
                body.style.background = 'linear-gradient(135deg, #F08080, #FA8072)'; // Example Placeholder
            }
            else if (bgName === 'rosegold-3') {
                body.style.background = 'linear-gradient(135deg, #E9967A, #FFA07A)'; // Example Placeholder
            }
            else if (bgName === 'rosegold-4') {
                body.style.background = 'linear-gradient(135deg, #F1B4C1, #D2A36E)'; // Example Placeholder
            }
            else if (bgName === 'rosegold-5') {
                body.style.background = 'linear-gradient(135deg, #F2A1B9, #D6A04D)'; // Example Placeholder
            }
            else if (bgName === 'coquette-2') {
                body.style.background = 'linear-gradient(135deg, #F8E0D4, #F5B7B1)'; // Example Placeholder
            }
            else if (bgName === 'coquette-3') {
                body.style.background = 'linear-gradient(135deg, #F2D1D1, #F4A1A1)'; // Example Placeholder
            }
            else if (bgName === 'coquette-4') {
                body.style.background = 'linear-gradient(135deg, #DB7093, #FF69B4)'; // Example Placeholder
            }
            else if (bgName === 'coquette-5') {
                body.style.background = 'linear-gradient(135deg, #20B2AA, #FF1493)'; // Example Placeholder
            }
            else if (bgName === '80s-1') {
                body.style.background = 'linear-gradient(135deg, #FF1493, #00FFFF, #FF6347)'; // Example Placeholder
            }
            else if (bgName === '80s-2') {
                body.style.background = 'linear-gradient(135deg, #8A2BE2, #00FFFF)'; // Example Placeholder
            }
            else if (bgName === '80s-3') {
                body.style.background = 'linear-gradient(135deg, #8A2BE2, #00FF7F, #FF1493)'; // Example Placeholder
            }
            else if (bgName === '80s-4') {
                body.style.background = 'linear-gradient(135deg, #FF6347, #1E90FF)'; // Example Placeholder
            }
            else if (bgName === '80s-5') {
                body.style.background = 'linear-gradient(135deg, #32CD32, #5A2F91, #9400D3)'; // Example Placeholder
            }
            else if (bgName === 'purplish-1') {
                body.style.background = 'linear-gradient(135deg, #800080, #D8BFD8)'; // Example Placeholder
            }
            else if (bgName === 'purplish-2') {
                body.style.background = 'linear-gradient(#000000, #2C004E, #6A0DAD)'; // Example Placeholder
            }
            else if (bgName === 'purplish-3') {
                body.style.background = 'linear-gradient(135deg, #9932CC, #DDA0DD)'; // Example Placeholder
            }
            else if (bgName === 'purplish-4') {
                body.style.background = 'linear-gradient(135deg, #BA55D3, #EE82EE)'; // Example Placeholder
            }
            else if (bgName === 'purplish-5') {
                body.style.background = 'linear-gradient(135deg, #8A2BE2, #E0B0FF)'; // Example Placeholder
            }
        });
    });
});