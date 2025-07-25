// Blog post data structure
const posts = [
  {
    title: "Escalating H2 SQL Injection to RCE",
    date: "2024-11-12",
    category: "Web Security",
    tags: ["CTF", "Source Code Analysis", "SQL Injection", "RCE"],
    imageClass: "post-image-1",
    summary: "Writeup on one Java Web Challenge that uses H2 db.",
  },
  {
    title: "Uncovering a Command Injection Vulnerability in CyberPanel",
    date: "2024-10-26",
    category: "Web Security",
    tags: ["Source Code Analysis", "Command Injection", "RCE", "0day"],
    imageClass: "post-image-2",
    summary: "A short story about how I found my first 0day.",
  },
  // Add more posts here
];

// Render posts to the DOM
function renderPosts(filterTag = null) {
  const mainContent = document.querySelector(".main-content");
  if (!mainContent) return;
  mainContent.innerHTML = "";

  const filteredPosts = filterTag
    ? posts.filter((post) => post.tags.includes(filterTag))
    : posts;

  filteredPosts.forEach((post) => {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    const postImage = document.createElement("div");
    postImage.className = `post-image ${post.imageClass}`;
    postCard.appendChild(postImage);

    const postContent = document.createElement("div");
    postContent.className = "post-content";

    const postTitle = document.createElement("div");
    postTitle.className = "post-title";
    postTitle.textContent = post.title;
    postContent.appendChild(postTitle);

    const postMeta = document.createElement("div");
    postMeta.className = "post-meta";
    postMeta.textContent = `${post.date} · ${post.category}`;
    postContent.appendChild(postMeta);

    const postTags = document.createElement("div");
    postTags.className = "post-tags";
    post.tags.forEach((tag) => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "tag";
      tagSpan.textContent = tag;
      postTags.appendChild(tagSpan);
    });
    postContent.appendChild(postTags);

    const postSummary = document.createElement("div");
    postSummary.className = "post-summary";
    postSummary.textContent = post.summary;
    postContent.appendChild(postSummary);

    postCard.appendChild(postContent);
    mainContent.appendChild(postCard);
  });

  // Add pagination if needed
  const pagination = document.createElement("div");
  pagination.className = "pagination";
  const pageBtn = document.createElement("button");
  pageBtn.className = "page-btn active";
  pageBtn.textContent = "1";
  pagination.appendChild(pageBtn);
  mainContent.appendChild(pagination);
}

// Tag filtering logic
function setupTagFilters() {
  const tagElements = document.querySelectorAll(".sidebar .tag");
  let activeTag = null;

  tagElements.forEach((tagEl) => {
    tagEl.style.cursor = "pointer";
    tagEl.addEventListener("click", () => {
      if (activeTag === tagEl.textContent) {
        activeTag = null;
        tagElements.forEach((t) => t.classList.remove("active"));
        renderPosts();
      } else {
        activeTag = tagEl.textContent;
        tagElements.forEach((t) => t.classList.remove("active"));
        tagEl.classList.add("active");
        renderPosts(activeTag);
      }
    });
  });
}

// Highlight active tag in sidebar
function styleActiveTag() {
  const style = document.createElement("style");
  style.textContent = `.sidebar .tag.active { background: #b18cff; color: #18161f; }`;
  document.head.appendChild(style);
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  renderPosts();
  setupTagFilters();
  styleActiveTag();
});
