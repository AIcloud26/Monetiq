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
    src: "logo.png",
    alt: "HiCloud Insight",
    navHeight: "48px",       // 导航栏 LOGO 高度（已适配网站尺寸）
  },
  
  // 配色系统（蓝色系，用户确认版本）
  colors: {
    primary: "#2563EB",      // 主品牌蓝
    secondary: "#3B82F6",    // 次级蓝
    light: "#60A5FA",        // 浅科技蓝
    accent: "#38BDF8",       // 青蓝Accent
    dark: "#0F172A",         // 深海军蓝
    darkLight: "#1E293B",    // 深色悬浮
    pageBg: "#F8FAFC",       // 页面背景
    cardBg: "#FFFFFF",       // 卡片背景
    textPrimary: "#111827",  // 主文字
    textSecondary: "#64748B",// 次文字
    gradient: "from-[#2563EB] via-[#3B82F6] to-[#60A5FA]",
    gradientCSS: "linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #60A5FA 100%)",
  },
};

// 立即注入 CSS 变量
(function() {
  var c = window.SITE_CONFIG.colors;
  var style = document.createElement("style");
  style.textContent = `
    :root {
      --color-primary: ${c.primary};
      --color-secondary: ${c.secondary};
      --color-light: ${c.light};
      --color-accent: ${c.accent};
      --color-dark: ${c.dark};
      --color-dark-light: ${c.darkLight};
      --color-page-bg: ${c.pageBg};
      --color-card-bg: ${c.cardBg};
      --color-text-primary: ${c.textPrimary};
      --color-text-secondary: ${c.textSecondary};
    }
    .bg-gradient-brand {
      background: ${c.gradientCSS};
    }
    .text-gradient-brand {
      background: ${c.gradientCSS};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hover\\:text-gradient-brand:hover {
      background: ${c.gradientCSS};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;
  document.head.appendChild(style);
})();

// DOM 加载完成后替换 LOGO
document.addEventListener("DOMContentLoaded", function() {
  var cfg = window.SITE_CONFIG;
  
  // 只处理导航栏的 LOGO（Footer 已改为文字品牌名）
  document.querySelectorAll(".site-logo").forEach(function(img) {
    img.src = cfg.logo.src;
    img.alt = cfg.logo.alt;
    img.style.height = cfg.logo.navHeight;
    img.style.width = "auto";
    img.style.display = "block";
  });
  
  // 更新页面标题
  document.title = cfg.siteName + " | " + cfg.siteTagline;
});
