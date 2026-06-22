/* Shared site footer — renders the full Flameback footer on every page and
   replaces any existing <footer>. Theme-aware (uses CSS variables), so it
   works on both v1 and v2. Edit here once to update the footer everywhere. */
(function () {
  var MARK = '<svg viewBox="121.5 244.6 110 167.2" fill="none" aria-hidden="true" style="height:38px;width:auto;flex:none">'
    + '<path transform="matrix(.33995817,0,0,.33995817,76.5,225.75)" d="M220.2 523.6C220.2 425.09999 220.2 329.59999 220.2 233.99997 233 234.79998 234.4 236.29998 234.4 248.19997 234.4 324.19996 234.4 400.09999 234.29999 476.09999 234.29999 481.99998 233.99999 487.89997 233.79999 493.8 233.4 505.9 234.29999 507 245.9 505.19999 298 496.8 335.4 468.8 355.5 419.89997 379.9 360.39997 358.1 293.09999 304.3 257.49998 283.4 243.69997 261.5 231.39997 241.59999 216.39997 212.09999 194.09996 196.29999 163.09996 190.59999 126.59996 189.99999 122.59996 187.79999 119.09996 184.7 116.59996 172.4 107.09996 163 95.59996 155.8 80.29996 159.5 80.09996 224 78.999958 253.4 79.899959 286.3 80.79996 312.8 94.499958 332 121.899959 334.7 125.79996 339.6 129.09996 344.1 130.69995 361.30003 136.79996 378.80003 141.89995 396 147.89995 411.5 153.29994 423.4 163.29994 432.5 179.09995 423.2 176.29994 415.5 173.29994 407.5 171.59995 383.8 166.39995 360 167.09995 336.6 172.89995 321.1 176.79994 310.80003 187.69995 305.9 203.19995 304.9 206.19995 304.19999 209.29996 303.4 212.39995 289.5 207.39995 288.4 205.59995 293.9 192.89995 304.3 168.59995 324.1 157.89995 349.4 155.69995 352.69999 155.39995 358.9 154.69995 366 154.19995 341.9 144.49996 310.1 137.59995 284.6 135.29996 259.2 132.99996 233.70001 131.49996 207 129.49996 207.4 132.49996 207.4 135.59996 208.1 138.39995 217.1 172.49994 237.3 198.19995 267.2 216.59995 283 226.29994 299.1 235.59995 314.2 246.39995 367.2 284.49995 389.2 336.69996 376.5 400.49995 364.4 461.29994 325.7 499.99995 265.7 516.19998 251.4 519.8 236.4 520.9 220.2 523.6Z" fill="currentColor"/>'
    + '<path transform="matrix(.33995817,0,0,.33995817,76.5,225.75)" d="M183.4 93.4C183 94.200008 200.7 110.5 205.79999 111.8 216.79999 114.600009 305 122.600009 311.09999 123.4 310.89997 121.3 291.3 96.9 251.89998 95.3 231.2 94.8 195.8 93.4 183.4 93.4Z" fill="#FF6D0A"/></svg>';

  var ICON = {
    ig:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    x:'<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.594l-5.165-6.75L5.32 22H2.06l8.02-9.166L1.5 2h6.76l4.67 6.17L18.244 2Zm-1.157 18h1.833L7.01 3.86H5.04L17.087 20Z"/></svg>',
    li:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9Z"/></svg>',
    yt:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9l5 3-5 3V9Z" fill="var(--bg)"/></svg>',
    th:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M16.5 11.2c-.2-3-1.9-4.7-4.6-4.7-2.4 0-4 1.4-4 3.4 0 1.6 1.3 2.6 3 2.6 2.1 0 3.3-1.5 3.3-3.8 0 4.3-2.2 6.8-5.6 6.8-3 0-5.1-2.3-5.1-6.3C3.5 5.5 6 3 10.4 3c4.3 0 7 2.6 7 7.1 0 4.7-2.5 7.4-6.7 7.4"/></svg>'
  };

  var CSS = [
    'footer.sf{border-top:1px solid var(--line);padding:54px 0 48px;position:relative;z-index:2;margin-top:auto;background:transparent;font-family:inherit}',
    '.sf *{box-sizing:border-box}',
    '.sf-wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,44px)}',
    '.sf-top{display:flex;gap:clamp(28px,5vw,56px);flex-wrap:wrap;align-items:flex-start;margin-bottom:30px}',
    '.sf-logo{display:flex;align-items:center;gap:13px;text-decoration:none;color:var(--ink);flex:none}',
    ".sf-name{font-family:'Geist','Helvetica Neue',Arial,sans-serif;display:flex;flex-direction:column;line-height:1}",
    '.sf-name b{font-weight:700;font-size:20px;letter-spacing:.04em}',
    '.sf-name small{font-size:9px;letter-spacing:.4em;color:var(--ink-soft);margin-top:4px}',
    '.sf-cookie{flex:1;min-width:300px;max-width:780px;font-size:13.5px;line-height:1.65;color:var(--ink-soft)}',
    '.sf-socials{display:flex;gap:16px;margin-bottom:32px}',
    '.sf-socials a{color:var(--ink);opacity:.75;transition:opacity .2s,color .2s;display:flex}',
    '.sf-socials a:hover{opacity:1;color:var(--accent)}',
    '.sf-mid{display:grid;grid-template-columns:1.05fr 2.5fr;gap:clamp(28px,5vw,60px)}',
    '@media(max-width:880px){.sf-mid{grid-template-columns:1fr;gap:36px}}',
    '.sf-hours{font-size:13px;color:var(--ink-soft);margin-bottom:18px;max-width:34ch;line-height:1.5}',
    '.sf-line{display:flex;align-items:center;gap:10px;font-size:14.5px;color:var(--ink);margin-bottom:7px;font-weight:500}',
    '.sf-line .i{color:var(--ink-soft);flex:none;display:flex}',
    '.sf-line a{color:var(--ink);text-decoration:none}.sf-line a:hover{color:var(--accent)}',
    '.sf-sub{font-size:12px;color:var(--ink-mute);margin-bottom:18px}',
    '.sf-sched{font-size:14.5px;color:var(--ink);margin-top:8px}.sf-sched b{font-weight:600}',
    '.sf-sched .sf-sub{margin-top:3px}',
    '.sf-cols{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}',
    '@media(max-width:680px){.sf-cols{grid-template-columns:repeat(2,1fr);gap:30px}}',
    '.sf-col h4{font-size:14.5px;font-weight:600;color:var(--ink);margin:0 0 15px}',
    '.sf-col a{display:block;font-size:13.5px;color:var(--ink-soft);text-decoration:none;margin-bottom:12px;line-height:1.35}',
    '.sf-col a:hover{color:var(--accent)}',
    '.sf-scores{margin-top:46px}',
    '.sf-scores h3{font-size:21px;font-weight:600;color:var(--ink);margin:0 0 18px}',
    '.sf-tbl{width:100%;border-collapse:collapse;border:1px solid var(--line)}',
    '.sf-tbl th,.sf-tbl td{border:1px solid var(--line);padding:14px 16px;text-align:left;font-size:13.5px}',
    '.sf-tbl th{color:var(--ink);font-weight:600}.sf-tbl td{color:var(--ink-soft)}',
    '@media(max-width:620px){.sf-tbl,.sf-tbl tbody,.sf-tbl tr,.sf-tbl td,.sf-tbl th{display:block;width:100%}.sf-tbl th{border-bottom:none;padding-bottom:4px}.sf-tbl td{padding-top:4px}}',
    '.sf-disc{margin-top:46px;border-top:1px solid var(--line);padding-top:34px}',
    '.sf-disc h3{font-size:21px;font-weight:600;color:var(--ink);margin:0 0 18px}',
    '.sf-disc ul{list-style:disc;margin:0;padding-left:20px}',
    '.sf-disc li{font-size:12.5px;line-height:1.65;color:var(--ink-soft);margin-bottom:13px;max-width:120ch}',
    '.sf-disc a{color:var(--accent);text-decoration:none;word-break:break-word}',
    '.sf-disc a:hover{text-decoration:underline}',
    '.sf-copy{text-align:center;margin-top:34px;padding-top:22px;border-top:1px solid var(--line);font-size:12.5px;color:var(--ink-mute)}'
  ].join('');

  function mail(e){ return '<a href="mailto:' + e + '">' + e + '</a>'; }
  var DISC = '<div class="sf-disc"><h3>Disclaimer</h3><ul>'
    + '<li>The information on the website is provided as general and impersonalized investment information and is not a recommendation, offer for solicitation, or advertisement to buy or sell any security. Flameback Capital Private Limited (Flameback) does not guarantee or certify the quality, accuracy, completeness, or timeliness of any content on the Flameback website. Information on this website should not be the sole criterion for making an investment decision.</li>'
    + '<li>We recommend suitable investment strategies and portfolios only after assessing our client’s investment objective, risk tolerance, preferences, and other relevant information and pursuant to a signed investment advisory agreement. However, we do not provide personalized financial planning, insurance advisory, tax, retirement, or estate planning services. See Terms of Use, Disclosure and Privacy Policy.</li>'
    + '<li>Flameback Investment Advisors, a Unit of Flameback Capital Private Limited (CIN: U65999KA2016PTC096684) is a Registered Investment Advisor (RIA) with Securities Exchange Board of India (SEBI) with Registration No: INA200013798 and BSE Enlistment Number: 1739</li>'
    + '<li>Investment in securities markets is subject to market risks. Read all the related documents carefully before investing.</li>'
    + '<li>Registration granted by SEBI, Enlistment with BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors</li>'
    + '<li>Past performance is not a guide to future returns.</li>'
    + '<li>Historical simulations (backtests) or live model portfolio performance or other hypothetical performance is provided for informational purposes only to indicate historical performance had Flameback Strategies have been available to investors. It should not be the only basis for making an investment decision.</li>'
    + '<li>Actual investors may experience different results from the hypothetical or historical results shown.</li>'
    + '<li>The value of investments can grow and decline in value and, therefore, the value of any investment portfolio at any given point in time cannot be guaranteed.</li>'
    + '<li>All investments involve risk and may lose money, including loss of principal and a reduction in earnings. Investors may lose all or part of their investments in any Flameback advised Portfolios or Strategies or other investment products including but not limited to Mutual Funds and Exchange Traded Funds (ETFs).</li>'
    + '<li>Please contact us on 91-80-23321099 and email at ' + mail('support@flamebackcapital.com') + ' or ' + mail('support.smallcase@flamebackcapital.com') + '</li>'
    + '<li>Compliance officer: Anila Abraham at ' + mail('admin@flamebackcapital.com') + '</li>'
    + '<li>Grievance officer: Anila Abraham at ' + mail('admin@flamebackcapital.com') + '</li>'
    + '<li>Principal officer: Malay Thakkar at ' + mail('malay@flamebackcapital.com') + '</li>'
    + '<li>Our Registered Address is No.61, MKK Road, Nagappa Block, Srirampuram, Bengaluru, Bengaluru (Bangalore) Urban, Karnataka, 560021</li>'
    + '<li>SEBI Office Details: SEBI Bhavan II PN-C/7, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</li>'
    + '<li>When you visit or interact with our sites, services or tools, we or our authorized service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</li>'
    + '<li>To lodge a complaint on Smart ODR Portal, visit <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener">https://scores.sebi.gov.in/</a></li>'
    + '</ul><p class="sf-copy">&copy;Flameback Capital Private Limited. All rights reserved.</p></div>';

  function col(title, links) {
    var a = links.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('');
    return '<div class="sf-col"><h4>' + title + '</h4>' + a + '</div>';
  }

  var HTML = '<footer class="sf"><div class="sf-wrap">'
    + '<div class="sf-top">'
    +   '<a class="sf-logo" href="index.html">' + MARK + '<span class="sf-name"><b>FLAMEBACK</b><small>CAPITAL</small></span></a>'
    +   '<p class="sf-cookie">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>'
    + '</div>'
    + '<div class="sf-socials">'
    +   '<a href="#" aria-label="Instagram">' + ICON.ig + '</a>'
    +   '<a href="#" aria-label="Twitter">' + ICON.x + '</a>'
    +   '<a href="#" aria-label="LinkedIn">' + ICON.li + '</a>'
    +   '<a href="#" aria-label="YouTube">' + ICON.yt + '</a>'
    +   '<a href="#" aria-label="Threads">' + ICON.th + '</a>'
    + '</div>'
    + '<div class="sf-mid">'
    +   '<div class="sf-contact">'
    +     '<p class="sf-hours">Usually, Indian business hours but we will try to get back ASAP</p>'
    +     '<p class="sf-line"><span class="i">&#9742;</span> +91 80 2332 1099</p>'
    +     '<p class="sf-line"><span class="i">&#9742;</span> +91 80 2332 1099</p>'
    +     '<p class="sf-sub">Indian business hours</p>'
    +     '<p class="sf-line"><span class="i">&#9993;</span> <a href="mailto:support@flamebackcapital.com">support@flamebackcapital.com</a></p>'
    +     '<p class="sf-sched">Schedule a <b>meeting</b><span class="sf-sub">Monday to Saturday: 10 am to 8pm</span></p>'
    +   '</div>'
    +   '<div class="sf-cols">'
    +     col('About', [['Team','flameback-team.html'],['Investment Philosophy','flameback-philosophy.html'],['Strategy R&D Process','flameback-strategy-rd.html'],['Technology','flameback-technology.html'],['Careers','#'],['Contact Us','flameback-app-schedule-call.html'],['Legal Information','#']])
    +     col('Investing', [['Smallcase','#'],['FAQs','#'],['Pricing','#']])
    +     col('Policies and Processes', [['Terms and Conditions','#'],['Complaints','#'],['Disclosures','flameback-pms-disclosure.html'],['Privacy Policy','#'],['Investor Charter','flameback-advisory-disclosure.html'],['Grievance Redressal','#'],['Refunds &amp; Cancellation Policy','#'],['Client Acceptance Policy','#'],['Anti-Money Laundering Policy','#']])
    +     col('Resources', [['FIST Presentation','#']])
    +   '</div>'
    + '</div>'
    + '<div class="sf-scores"><h3>SCORES Complaints - May 31, 2026</h3>'
    +   '<table class="sf-tbl"><thead><tr><th>At the beginning of the month</th><th>Received during the month</th><th>Resolved during the month</th><th>Pending at the end of the month</th></tr></thead>'
    +   '<tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>'
    + '</div>'
    + DISC
    + '</div></footer>';

  function mount() {
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    var existing = document.querySelector('footer');
    if (existing) { existing.outerHTML = HTML; }
    else { document.body.insertAdjacentHTML('beforeend', HTML); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
