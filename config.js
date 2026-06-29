// ============================================
// HiCloud Insight 站点配置
// 以后换LOGO、改站名、调配色，只改这个文件
// ============================================
window.SITE_CONFIG = {
  // 站点基础信息
  siteName: "HiCloud Insight",
  siteTagline: "Global Digital Growth",
  
  // LOGO 配置
  logo: {
    src: "logo.png",       // LOGO 图片路径，换LOGO直接替换图片文件即可
    alt: "HiCloud Insight",
    width: "32px",         // 导航栏 LOGO 高度
    footerWidth: "28px",   // 页脚 LOGO 高度
  },
  
  // 配色系统（蓝紫科技风，匹配 LOGO）
  colors: {
    primary: "#6366F1",    // 主色：靛蓝
    secondary: "#8B5CF6",  // 次色：紫罗兰
    accent: "#A855F7",     // 强调色：紫
    dark: "#1E1B4B",       // 深色背景
    darkLight: "#312E81",  // 深色悬浮
    gradient: "from-[#6366F1] via-[#8B5CF6] to-[#A855F7]", // Tailwind 渐变类
  },
};

// 立即注入 CSS 变量（确保样式优先加载，避免闪烁）
(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-accent: ${c.accent};
      --color-dark: ${c.dark};
      --color-dark-light: ${c.darkLight};
    }
    .bg-gradient-brand {
      background: linear-gradient(135deg, ${c.primary} 0%, ${c.secondary} 50%, ${c.accent} 100%);
    }
    .text-gradient-brand {
      background: linear-gradient(135deg, ${c.primary}, ${c.accent});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hover\:text-gradient-brand:hover {
      background: linear-gradient(135deg, ${c.primary}, ${c.accent});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
  document.head.appendChild(style);
})();

// DOM 加载完成后替换 LOGO 和文字
document.addEventListener("DOMContentLoaded", function() {
  var cfg = window.SITE_CONFIG;
  
  // 替换所有 .site-logo 图片
  document.querySelectorAll(".site-logo").forEach(function(img) {
    img.src = cfg.logo.src;
    img.alt = cfg.logo.alt;
    if (img.closest("footer")) {
      img.style.height = cfg.logo.footerWidth;
    } else {
      img.style.height = cfg.logo.width;
    }
    img.style.width = "auto";
    img.style.display = "block";
  });
  
  // 替换站点名称
  document.querySelectorAll(".site-name").forEach(function(el) {
    el.textContent = cfg.siteName;
  });
  
  // 更新页面标题
  document.title = cfg.siteName + " | " + cfg.siteTagline;
});
