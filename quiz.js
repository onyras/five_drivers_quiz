// 5 Drivers Quiz Data based on Taibi Kahler's framework
const quizData = {
    drivers: [
        {
            id: 'please-others',
            title: 'Please Others',
            color: 'var(--nk-blue)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"/>
            </svg>`,
            focus: 'Gaining approval, avoiding conflict, and being empathetic',
            strengths: 'Excellent in team cohesion and diplomacy. You naturally build rapport, create psychological safety, and help people feel valued and heard.',
            challenges: 'Risk of losing self-identity, stress from over-accommodation, and difficulty delivering criticism or making unpopular decisions.',
            balanceStrategy: 'Encourage your own assertiveness. Set healthy boundaries even when it feels uncomfortable. Remember that diverse opinions strengthen teams, and your needs matter too.',
            questions: [
                "I prioritize keeping others happy, even if it means putting my own needs aside.",
                "I find it difficult to say 'no' to requests from my team or colleagues.",
                "I tend to avoid conflict and seek harmony in my relationships at work.",
                "I feel uncomfortable when someone is upset with me or disappointed in my decisions.",
                "I often take on extra work to help others, even when I'm already stretched thin."
            ],
            reflections: [
                "When was the last time you said 'no' to protect your own priorities?",
                "How might your team benefit from hearing your honest opinion, even if it's critical?",
                "What boundaries would serve both you and your team better?"
            ]
        },
        {
            id: 'be-strong',
            title: 'Be Strong',
            color: 'var(--nk-green)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>`,
            focus: 'Resilience, independence, and stoicism',
            strengths: 'Great in crisis management, self-directed, and inspiring confidence. You stay calm under pressure and provide stability when others feel uncertain.',
            challenges: 'Emotional suppression, reluctance to collaborate, and difficulty showing vulnerability. May struggle to ask for help or delegate effectively.',
            balanceStrategy: 'Cultivate emotional intelligence and encourage open communication. Demonstrate that vulnerability is a strength. Allow yourself to lean on others and share the load.',
            questions: [
                "I prefer to handle problems on my own rather than asking for help.",
                "I rarely show my emotions at work, even when I'm feeling stressed or overwhelmed.",
                "I believe leaders should project strength and confidence at all times.",
                "I find it difficult to admit when I don't know something or have made a mistake.",
                "I tend to push through challenges alone rather than seeking support from my team."
            ],
            reflections: [
                "What would change if your team saw you as human rather than invincible?",
                "Who could you ask for help with something you've been carrying alone?",
                "How might showing more vulnerability actually increase your team's trust?"
            ]
        },
        {
            id: 'hurry-up',
            title: 'Hurry Up',
            color: 'var(--nk-orange)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>`,
            focus: 'Constant motion, efficiency, and speed',
            strengths: 'Energetic, excellent in time management and rapid decision-making. You drive momentum and help teams move quickly through obstacles.',
            challenges: 'Burnout risk, difficulty saying no, overlooking details, and impatience with slower-paced colleagues. May create stress for those around you.',
            balanceStrategy: 'Promote balanced urgency and effective prioritization. Emphasize quality over speed. Build in reflection time and recognize that some things need space to develop.',
            questions: [
                "I feel restless when things aren't moving fast enough.",
                "I often find myself rushing through tasks to get to the next thing.",
                "I get frustrated when meetings run long or discussions move slowly.",
                "I tend to speak quickly and sometimes finish others' sentences.",
                "I feel most alive when I'm juggling multiple priorities at once."
            ],
            reflections: [
                "What important details might you be missing by moving too fast?",
                "How is your pace affecting the people around you?",
                "What would happen if you intentionally slowed down this week?"
            ]
        },
        {
            id: 'try-hard',
            title: 'Try Hard',
            color: 'var(--nk-yellow)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>`,
            focus: 'Persistent effort, especially facing challenges',
            strengths: 'Resilient in adversity, innovative problem-solving, gives 100%, and self-motivated. You never give up and inspire others with your dedication.',
            challenges: 'Over-complication, unwillingness to ask for help, difficulty prioritizing, and fear of failure. May exhaust yourself and others by making things harder than necessary.',
            balanceStrategy: 'Foster a growth mindset and celebrate small wins. Encourage smart work alongside hard work. Sometimes the answer is simpler than you think.',
            questions: [
                "I believe that if something feels too easy, I'm probably not doing it right.",
                "I tend to over-prepare and over-research before making decisions.",
                "I struggle to celebrate successes because I immediately focus on what's next.",
                "I often take on the hardest challenges, even when simpler paths are available.",
                "I feel guilty if I'm not working hard or being productive."
            ],
            reflections: [
                "What would 'good enough' look like for your current project?",
                "When did trying hard actually make something harder than it needed to be?",
                "What simple solution have you been overcomplicating?"
            ]
        },
        {
            id: 'be-perfect',
            title: 'Be Perfect',
            color: 'var(--nk-lilac)',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>`,
            focus: 'High standards, attention to detail, striving for excellence',
            strengths: 'Quality-driven, reliable, and thorough. You catch what others miss and set standards that elevate the whole team.',
            challenges: 'Decision paralysis, stress, effective but inefficient, slow and pedantic. May create bottlenecks and frustrate faster-moving colleagues.',
            balanceStrategy: 'Prioritize continuous improvement over instant perfection. Set realistic goals and balance perfection with efficiency. Learn to ship imperfect work and iterate.',
            questions: [
                "I have very high standards for myself and my work.",
                "I often spend extra time polishing work that others would consider 'done'.",
                "I find it hard to delegate because others might not do it to my standard.",
                "I feel anxious about making mistakes or being seen as incompetent.",
                "I tend to focus on what's wrong or could be improved rather than what's going well."
            ],
            reflections: [
                "What would you attempt if you knew you couldn't fail?",
                "Where is your perfectionism slowing down your team?",
                "What's the cost of waiting for 'perfect' versus shipping 'good enough'?"
            ]
        }
    ]
};

// Quiz State
let currentSection = 0;
let answers = {};

// Initialize answers object
function initAnswers() {
    quizData.drivers.forEach((driver, driverIndex) => {
        driver.questions.forEach((_, qIndex) => {
            const questionId = `q${driverIndex}_${qIndex}`;
            answers[questionId] = null;
        });
    });
}

// Show a specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// Start the quiz
function startQuiz() {
    initAnswers();
    currentSection = 0;
    showScreen('quiz');
    renderSection();
}

// Render current section
function renderSection() {
    const driver = quizData.drivers[currentSection];

    // Update header
    document.getElementById('driverTitle').textContent = driver.title;
    document.getElementById('driverDescription').textContent = driver.focus;
    document.getElementById('currentDriver').textContent = `Driver ${currentSection + 1}`;

    // Update icon
    const iconEl = document.getElementById('driverIcon');
    iconEl.innerHTML = driver.icon;
    iconEl.style.setProperty('--driver-color', driver.color);

    // Update progress bar
    const progress = ((currentSection + 1) / quizData.drivers.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Render questions
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    driver.questions.forEach((question, index) => {
        const questionId = `q${currentSection}_${index}`;
        const questionNum = (currentSection * 5) + index + 1;

        const questionEl = document.createElement('div');
        questionEl.className = 'question';
        questionEl.innerHTML = `
            <p class="question-text"><span class="question-number">${questionNum}.</span> ${question}</p>
            <div class="rating-labels">
                <span>1 Never</span>
                <span>2 Rarely</span>
                <span>3 Sometimes</span>
                <span>4 Often</span>
                <span>5 Always</span>
            </div>
            <div class="rating-options">
                ${[1, 2, 3, 4, 5].map(value => `
                    <label class="rating-option ${answers[questionId] === value ? 'selected' : ''}" style="--driver-color: ${driver.color}">
                        <input type="radio" name="${questionId}" value="${value}"
                            ${answers[questionId] === value ? 'checked' : ''}
                            onchange="selectAnswer('${questionId}', ${value})">
                        <span class="rating-value">${value}</span>
                    </label>
                `).join('')}
            </div>
        `;
        container.appendChild(questionEl);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = currentSection === 0 ? 'none' : 'block';

    const isLastSection = currentSection === quizData.drivers.length - 1;
    document.getElementById('nextBtn').textContent = isLastSection ? 'See My Results' : 'Next';
}

// Select an answer
function selectAnswer(questionId, value) {
    answers[questionId] = value;

    // Update visual selection
    const options = document.querySelectorAll(`input[name="${questionId}"]`);
    options.forEach(option => {
        option.closest('.rating-option').classList.remove('selected');
        if (option.checked) {
            option.closest('.rating-option').classList.add('selected');
        }
    });
}

// Validate current section
function validateSection() {
    const driver = quizData.drivers[currentSection];
    for (let i = 0; i < driver.questions.length; i++) {
        const questionId = `q${currentSection}_${i}`;
        if (answers[questionId] === null) {
            return false;
        }
    }
    return true;
}

// Next section
function nextSection() {
    if (!validateSection()) {
        alert('Please answer all questions before continuing.');
        return;
    }

    if (currentSection < quizData.drivers.length - 1) {
        currentSection++;
        renderSection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showScreen('email-capture');
    }
}

// Previous section
function previousSection() {
    if (currentSection > 0) {
        currentSection--;
        renderSection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Submit email and show results
async function submitEmail(event) {
    event.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    const userData = {
        email: document.getElementById('email').value
    };

    try {
        // Send to newsletter API
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || 'Failed to subscribe');
        }

        console.log('Subscription successful:', result);
        calculateAndShowResults();

    } catch (error) {
        console.error('Subscription error:', error);
        // Still show results even if subscription fails
        calculateAndShowResults();
    } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

// Calculate scores
function calculateScores() {
    const driverScores = quizData.drivers.map((driver, driverIndex) => {
        let score = 0;
        for (let i = 0; i < 5; i++) {
            const questionId = `q${driverIndex}_${i}`;
            score += answers[questionId] || 0;
        }
        return {
            ...driver,
            score: score,
            percentage: (score / 25) * 100
        };
    });

    // Sort by score descending to find dominant driver
    const sortedDrivers = [...driverScores].sort((a, b) => b.score - a.score);
    const dominantDriver = sortedDrivers[0];

    return {
        driverScores,
        sortedDrivers,
        dominantDriver
    };
}

// Calculate and show results
function calculateAndShowResults() {
    const results = calculateScores();

    // Show screen first
    showScreen('results');

    // Render dominant driver card
    const dominantDriver = results.dominantDriver;
    const dominantCard = document.getElementById('dominantDriverCard');
    dominantCard.style.setProperty('--driver-color', dominantDriver.color);

    document.getElementById('dominantDriverIcon').innerHTML = dominantDriver.icon;
    document.getElementById('dominantDriverTitle').textContent = dominantDriver.title;
    document.getElementById('dominantDriverTagline').textContent = dominantDriver.focus;
    document.getElementById('dominantStrengths').textContent = dominantDriver.strengths;
    document.getElementById('dominantChallenges').textContent = dominantDriver.challenges;
    document.getElementById('balanceStrategy').textContent = dominantDriver.balanceStrategy;

    // Render reflection questions
    const reflectionList = document.getElementById('reflectionList');
    reflectionList.innerHTML = dominantDriver.reflections.map(q => `<li>${q}</li>`).join('');

    // Render driver bars
    const driverBarsContainer = document.getElementById('driverBars');
    driverBarsContainer.innerHTML = results.sortedDrivers.map((driver, index) => `
        <div class="driver-bar-item" style="animation-delay: ${index * 0.1}s">
            <div class="driver-bar-header">
                <div class="driver-bar-icon" style="--driver-color: ${driver.color}">
                    ${driver.icon}
                </div>
                <span class="driver-bar-title">${driver.title}</span>
                <span class="driver-bar-score">${driver.score}/25</span>
            </div>
            <div class="driver-bar">
                <div class="driver-bar-fill" data-width="${driver.percentage}" style="--driver-color: ${driver.color}"></div>
            </div>
        </div>
    `).join('');

    // Animate bars after delay
    setTimeout(() => {
        document.querySelectorAll('.driver-bar-fill').forEach((bar, i) => {
            setTimeout(() => {
                bar.style.width = bar.dataset.width + '%';
            }, i * 100);
        });
    }, 300);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAnswers();
});
