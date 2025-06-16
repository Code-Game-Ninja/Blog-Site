const postsPerPage = 3;
let currentPage = 1;

const posts = [
    {
        id: "post1",
        title: "Exploring JavaScript Fundamentals",
        content: `<p>JavaScript is the language of the web, powering interactive experiences across billions of devices. In this post, we'll dive into the core concepts that every developer should master.</p>
                    <p class="font-semibold">Key topics covered:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Variables and Data Types</li>
                      <li>Functions and Scope</li>
                      <li>DOM Manipulation</li>
                      <li>ES6+ Features</li>
                    </ul>
                    <p>Understanding these fundamentals will give you a solid foundation to build upon as you progress in your JavaScript journey.</p>`,
        date: "June 16, 2025",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["JavaScript", "Frontend", "Beginner"],
        readTime: "5 min read"
    },
    {
        id: "post2",
        title: "Why Tailwind CSS is a Game Changer",
        content: `<p>Tailwind CSS has revolutionized how developers approach styling in modern web applications. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
                    <p>The benefits include:</p>
                    <ul class="list-disc pl-5 space-y-1">
                      <li>Faster UI development</li>
                      <li>Smaller CSS bundle sizes</li>
                      <li>No more naming dilemmas</li>
                      <li>Easy customization</li>
                    </ul>
                    <p>In this post, we'll explore practical examples of how Tailwind can streamline your workflow and eliminate the context switching between HTML and CSS files.</p>`,
        date: "June 12, 2025",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Tailwind", "CSS", "Productivity"],
        readTime: "7 min read"
    },
    {
        id: "post3",
        title: "Getting Started with Web Development",
        content: `<p>Web development can seem overwhelming at first, but breaking it down into manageable pieces makes the journey much smoother. The three core technologies you need to learn are:</p>
                    <div class="grid md:grid-cols-3 gap-4 my-4">
                      <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400">HTML</h4>
                        <p>The structure of your web pages</p>
                      </div>
                      <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400">CSS</h4>
                        <p>The styling and layout</p>
                      </div>
                      <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400">JavaScript</h4>
                        <p>The interactivity and logic</p>
                      </div>
                    </div>
                    <p>This post will guide you through setting up your development environment and creating your first web page from scratch.</p>`,
        date: "June 5, 2025",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Web", "Beginner", "HTML"],
        readTime: "10 min read"
    },
    {
        id: "post3",
        title: "NVIDIA's Latest Breakthroughs in AI Computing",
        content: `<p>NVIDIA continues to push the boundaries of AI computing with their latest GPU architectures. The new H100 Tensor Core GPU delivers unprecedented performance for AI training and inference workloads.</p>
                    <div class="grid md:grid-cols-2 gap-4 my-4">
                      <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400">Key Features</h4>
                        <ul class="list-disc pl-5 space-y-1 mt-2">
                          <li>4th Gen Tensor Cores</li>
                          <li>Transformer Engine</li>
                          <li>2-6x faster than previous gen</li>
                        </ul>
                      </div>
                      <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                        <h4 class="font-bold text-teal-600 dark:text-teal-400">Use Cases</h4>
                        <ul class="list-disc pl-5 space-y-1 mt-2">
                          <li>Large language models</li>
                          <li>Computer vision</li>
                          <li>Recommendation systems</li>
                        </ul>
                      </div>
                    </div>
                    <p>These advancements are enabling researchers to tackle problems that were previously computationally infeasible.</p>`,
        date: "June 10, 2025",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["NVIDIA", "AI", "GPU", "Hardware"],
        readTime: "8 min read",
        category: "Artificial Intelligence"
    },
    {
        id: "post4",
        title: "The Future of Cybersecurity in 2025",
        content: `<p>As cyber threats become increasingly sophisticated, organizations must adapt their security strategies. Here are the key trends shaping cybersecurity this year:</p>
                    <ol class="list-decimal pl-5 space-y-2 my-4">
                      <li class="font-semibold">AI-Powered Threat Detection</li>
                      <p>Machine learning algorithms are now capable of identifying novel attack patterns in real-time.</p>
                      
                      <li class="font-semibold">Zero Trust Architecture</li>
                      <p>The "never trust, always verify" approach is becoming the standard for enterprise security.</p>
                      
                      <li class="font-semibold">Quantum-Resistant Cryptography</li>
                      <p>With quantum computing on the horizon, new encryption standards are being developed.</p>
                    </ol>
                    <p>Staying ahead of these trends is crucial for protecting sensitive data and infrastructure.</p>`,
        date: "June 8, 2025",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Cybersecurity", "AI", "Enterprise"],
        readTime: "6 min read",
        category: "Security"
    },
    {
        id: "post5",
        title: "Cloud Computing: Multi-Cloud vs Hybrid Cloud Strategies",
        content: `<p>Organizations are increasingly adopting complex cloud architectures to meet their diverse needs. Understanding the differences between multi-cloud and hybrid cloud approaches is essential for making informed decisions.</p>
                    <table class="w-full my-4 border-collapse">
                      <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          <th class="p-2 text-left">Strategy</th>
                          <th class="p-2 text-left">Pros</th>
                          <th class="p-2 text-left">Cons</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                          <td class="p-2 font-medium">Multi-Cloud</td>
                          <td class="p-2">Vendor flexibility, best-of-breed services</td>
                          <td class="p-2">Increased management complexity</td>
                        </tr>
                        <tr>
                          <td class="p-2 font-medium">Hybrid Cloud</td>
                          <td class="p-2">Data sovereignty, legacy system integration</td>
                          <td class="p-2">Higher initial setup costs</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>The right choice depends on your organization's specific requirements and constraints.</p>`,
        date: "June 5, 2025",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Cloud", "AWS", "Azure", "GCP"],
        readTime: "9 min read",
        category: "Cloud Computing"
    },
    {
        id: "post6",
        title: "Generative AI: Beyond ChatGPT",
        content: `<p>While ChatGPT has captured public attention, the field of generative AI extends far beyond text generation. Here's what's happening at the cutting edge:</p>
                    <div class="grid md:grid-cols-2 gap-4 my-4">
                      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 class="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400">Image Generation</h4>
                        <p>Models like Stable Diffusion and Midjourney are creating photorealistic images from text prompts.</p>
                      </div>
                      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 class="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400">Code Generation</h4>
                        <p>GitHub Copilot and similar tools are revolutionizing how developers write code.</p>
                      </div>
                      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 class="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400">Video Synthesis</h4>
                        <p>New models can generate realistic video sequences from single images.</p>
                      </div>
                      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 class="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400">3D Modeling</h4>
                        <p>AI is now capable of generating complete 3D assets for games and simulations.</p>
                      </div>
                    </div>
                    <p>The pace of innovation in this field shows no signs of slowing down.</p>`,
        date: "June 3, 2025",
        image: "https://images.unsplash.com/photo-1677442135139-3af8b33c5c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["AI", "Generative", "Machine Learning"],
        readTime: "10 min read",
        category: "Artificial Intelligence"
    },
    {
        id: "post7",
        title: "The Rise of Edge Computing in IoT",
        content: `<p>Edge computing is transforming how we process data from IoT devices by bringing computation closer to the data source. This paradigm shift offers several advantages:</p>
                    <ul class="list-disc pl-5 space-y-2 my-4">
                      <li><span class="font-semibold">Reduced Latency:</span> Critical for applications like autonomous vehicles and industrial automation</li>
                      <li><span class="font-semibold">Bandwidth Optimization:</span> Only relevant data is sent to the cloud</li>
                      <li><span class="font-semibold">Improved Privacy:</span> Sensitive data can be processed locally</li>
                      <li><span class="font-semibold">Offline Operation:</span> Systems remain functional without cloud connectivity</li>
                    </ul>
                    <p>Major cloud providers are now offering edge computing solutions, making adoption easier than ever.</p>`,
        date: "June 1, 2025",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["IoT", "Edge Computing", "Cloud"],
        readTime: "7 min read",
        category: "Emerging Technologies"
    }
];

function renderPosts(postsToRender) {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginatedPosts = postsToRender.slice(start, end);

    if (paginatedPosts.length === 0) {
        container.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
              <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <h3 class="text-xl font-bold mb-2">No posts found</h3>
              <p class="text-gray-600 dark:text-gray-400">Try adjusting your search query</p>
            </div>
          `;
        return;
    }

    paginatedPosts.forEach(post => {
        const comments = JSON.parse(localStorage.getItem(post.id)) || [];

        const shareUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(post.title);

        container.innerHTML += `
          <article id="${post.id}" class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg fade-in overflow-hidden">
            <div class="relative">
              <img src="${post.image}" alt="${post.title}" class="rounded-lg w-full h-64 object-cover mb-4" />
              <span class="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ${post.readTime}
              </span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-500 dark:text-gray-400">${post.date}</span>
              <button onclick="bookmarkPost('${post.id}')" class="text-gray-400 hover:text-teal-500">
                <i class="far fa-bookmark"></i>
              </button>
            </div>
            <h2 class="text-2xl font-bold mb-3 hover:text-teal-500 transition cursor-pointer">${post.title}</h2>
            <div class="post-content mb-6">${post.content}</div>
            <div class="mb-4 flex flex-wrap gap-2">
              ${post.tags.map(tag => `<span class="text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 px-3 py-1 rounded-full">${tag}</span>`).join('')}
            </div>

            <!-- Social Share -->
            <div class="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-4">
              <h4 class="text-sm font-semibold mb-2">Share this post:</h4>
              <div class="flex gap-4">
                <a target="_blank" href="https://wa.me/?text=${shareText}%20${shareUrl}" 
                   class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a target="_blank" href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" 
                   class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <i class="fab fa-twitter"></i> Twitter
                </a>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" 
                   class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <i class="fab fa-facebook-f"></i> Facebook
                </a>
              </div>
            </div>

            <!-- Comment Form -->
            <h3 class="text-lg font-semibold mt-6 mb-4">Leave a Comment</h3>
            <form onsubmit="submitComment(event, '${post.id}')" class="mb-6">
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label for="${post.id}-name" class="block text-sm font-medium mb-1">Name</label>
                  <input type="text" id="${post.id}-name" placeholder="Your Name" 
                         class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" required />
                </div>
                <div>
                  <label for="${post.id}-email" class="block text-sm font-medium mb-1">Email (optional)</label>
                  <input type="email" id="${post.id}-email" placeholder="your@email.com" 
                         class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                </div>
              </div>
              <div class="mb-4">
                <label for="${post.id}-message" class="block text-sm font-medium mb-1">Comment</label>
                <textarea id="${post.id}-message" placeholder="Your thoughts..." rows="4"
                          class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500" required></textarea>
              </div>
              <button type="submit" class="bg-teal-500 hover:bg-teal-600 transition text-white font-medium py-2 px-6 rounded-lg">
                Post Comment
              </button>
            </form>

            <!-- Comments -->
            <div id="${post.id}-comments" class="space-y-4">
              <h4 class="font-semibold">${comments.length} ${comments.length === 1 ? 'Comment' : 'Comments'}</h4>
              ${comments.length > 0 ? comments.map(c => `
                <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div class="flex justify-between items-start mb-2">
                    <strong class="text-teal-600 dark:text-teal-400">${c.name}</strong>
                    <span class="text-xs text-gray-500">${c.date || ''}</span>
                  </div>
                  <p>${c.message}</p>
                </div>`).join('') : `
                <p class="text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
              `}
            </div>
          </article>
        `;
    });

    renderPagination(postsToRender);
}

function submitComment(e, postId) {
    e.preventDefault();
    const name = document.getElementById(`${postId}-name`).value.trim();
    const message = document.getElementById(`${postId}-message`).value.trim();
    const email = document.getElementById(`${postId}-email`).value.trim();

    if (!name || !message) return;

    const comment = {
        name,
        message,
        email,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    const comments = JSON.parse(localStorage.getItem(postId)) || [];
    comments.push(comment);
    localStorage.setItem(postId, JSON.stringify(comments));

    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    successMsg.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Comment posted successfully!';
    document.body.appendChild(successMsg);

    setTimeout(() => {
        successMsg.remove();
    }, 3000);

    renderPosts(posts); // Re-render posts and comments
}

function bookmarkPost(postId) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const post = posts.find(p => p.id === postId);

    if (!bookmarks.some(b => b.id === postId)) {
        bookmarks.push(post);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        // Show bookmark success
        const bookmarkMsg = document.createElement('div');
        bookmarkMsg.className = 'fixed bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg';
        bookmarkMsg.innerHTML = '<i class="fas fa-bookmark mr-2"></i> Post bookmarked!';
        document.body.appendChild(bookmarkMsg);

        setTimeout(() => {
            bookmarkMsg.remove();
        }, 3000);
    } else {
        // Already bookmarked
        const bookmarkMsg = document.createElement('div');
        bookmarkMsg.className = 'fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg';
        bookmarkMsg.innerHTML = '<i class="fas fa-info-circle mr-2"></i> Already bookmarked';
        document.body.appendChild(bookmarkMsg);

        setTimeout(() => {
            bookmarkMsg.remove();
        }, 3000);
    }
}

function renderPagination(postsToRender) {
    const container = document.getElementById('blogContainer');
    const totalPages = Math.ceil(postsToRender.length / postsPerPage);

    if (totalPages <= 1) return;

    container.innerHTML += `
        <div class="flex justify-center items-center gap-4 mt-8">
          <button onclick="prevPage()" ${currentPage === 1 ? 'disabled' : ''} 
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 flex items-center gap-2">
            <i class="fas fa-chevron-left"></i> Previous
          </button>
          <span class="text-sm">Page ${currentPage} of ${totalPages}</span>
          <button onclick="nextPage(${totalPages})" ${currentPage === totalPages ? 'disabled' : ''} 
                  class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 flex items-center gap-2">
            Next <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      `;
}

function nextPage(totalPages) {
    if (currentPage < totalPages) {
        currentPage++;
        renderPosts(posts);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPosts(posts);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Search
document.getElementById('search').addEventListener('input', (e) => {
    currentPage = 1;
    const query = e.target.value.toLowerCase();
    const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderPosts(filtered);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme
function setInitialTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

// Toggle theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Mobile Menu Functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

function closeMobileMenuHandler() {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    setInitialTheme();

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Mobile menu
    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenu.addEventListener('click', closeMobileMenuHandler);

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMobileMenuHandler();
        }
    });
});

// Initial render
renderPosts(posts);