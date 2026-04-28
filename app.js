/**
 * 元データ: 自転車点検会マニュアル2026前期.txt
 * detail: 本文（段落の配列）
 * fieldList / fieldsTitle: 記入項目などをカード表示（任意）
 * dialogue: 台詞をLINE風に表示（任意）。詳細（fieldList または detail）がある項目は「概要 / 詳細」タブ。台詞もあれば「台詞」タブを追加します
 * steps / url: 従来どおり（単一リンク）
 * links: [{ label, href }] 複数の参考資料。PDF/SVG はドロワー内に埋め込み表示し、別タブ用ボタンも出します（任意）
 */
const CONFIG = {
  eventTitle: "自転車点検会マニュアル",
  manuals: [
    {
      id: "reception",
      category: "受付フェイズ",
      title: "受付",
      summary:
        "受付は〜15:30まで、引取は〜16:30まで。1日最大60台（1日目は点検表No.60まで）。点検票の必須欄と引換証が最重要です。",
      steps: [
        "点検票の記入（赤枠は必須。有料修理希望はオレンジ枠も必須）",
        "引換証に点検表と同じ番号・受取16:30までを記入し渡す",
        "点検票はGIが常に保管。自転車は修理場所または修理待機場所へ",
      ],
      links: [{ label: "受付（PDF）", href: "./reception.pdf" }],
      fieldsTitle: "点検票まわりの記入項目",
      fieldList: [
        { label: "所属", value: "学科まで記入してもらう。" },
        { label: "氏名・連絡先", value: "いつでもつながる番号を記入してもらう。" },
        {
          label: "学生生活110番会員",
          value:
            "会員かどうかは近くのJBR担当に確認し案内ができる。聞かれたらそのように案内する。会員に〇がついていれば会員証の提示を求める。会員であれば修理費が安くなることは、必要に応じて伝える。",
        },
        {
          label: "引取予定時刻",
          value: "引取は16:30までであるため、それ以降を指定されないように案内する。",
        },
        {
          label: "修理希望確認",
          value:
            "無料点検か有料修理かを選んでもらう。有料修理で何ができるか聞かれたら答える。受付卓に料金表を置く。有料修理で来てほしい場合は有料修理を選択してもらう。",
        },
        {
          label: "気になる箇所・その他気になる箇所",
          value: "自転車で気になる部分を聞き、あれば各欄に記入してもらう。",
        },
        {
          label: "詳細な症状",
          value: "実際に使用する用紙にはこの項目がない場合がある。",
        },
        {
          label: "修理希望箇所・修理上限金額",
          value:
            "有償修理希望のお客様のみオレンジ枠も記入。現金のみであること、修理費に上限を設定できることを説明する。",
        },
      ],
      detail: [
        "お客様には点検票に記入いただきます。必須は赤枠、有料修理の希望がある方はオレンジ枠も必須です。点検内容以外の欄は、指示に沿って記入してもらって構いません。",
        "マニュアル本文では「受付は〜15:30まで」「引取は〜16:30まで」とあります。一方、台詞例では引き取りを「4限の終わりまで」と案内しています。掲示や運営指示と食い違う場合は、現地の指示を優先してください。",
        "点検票はGIが常に持ち、紛失しないよう管理します。記入後は引換証（小さな紙）を渡し、点検表と同じ番号と受取16:30までを明記し、なくさないよう伝えます。",
        "記入後は点検票を自転車に貼り、修理場所または修理待機場所に移動させます。",
      ],
      dialogue: {
        title: "受付の台詞例",
        preface:
          "次の台詞は全部声に出す必要はありません。お客様から記入や選択について質問があったときに答える程度で大丈夫です。",
        lines: [
          { role: "GI", text: "こんにちは。\n自転車点検をご希望ですか？" },
          { role: "お客様", text: "はい。" },
          { role: "GI", text: "こちらの受付用紙に\nご記入をお願いします。" },
          { role: "GI", text: "学部学科、氏名、連絡先を\nはじめに記入してください。" },
          { role: "GI", text: "学生生活110番の会員ですか？" },
          { role: "お客様", text: "はい／いいえ。" },
          { role: "GI", text: "（会員の場合）\n会員証を見せてください" },
          {
            role: "GI",
            text: "引き取り時間の注意点ですが、\n最終受け取り時刻が4限の終わりまで\nとなっています。\nそれを考慮してご記入ください。",
          },
          { role: "GI", text: "無償点検と有償修理がありますが、\nどちらにしますか？" },
          { role: "お客様", text: "有償／無償でお願いします。" },
          {
            role: "GI",
            text: "（有償の場合）現金のみの対応です。\n修理費の上限をおいくらにしますか？",
          },
          { role: "お客様", text: "（上限）〇〇円です。" },
          {
            role: "GI",
            text: "自転車の気になる箇所の項目を\nご記入ください。詳しい症状や\n気になる箇所がありましたら、\nそちらにもご記入ください。",
          },
        ],
      },
    },
    {
      id: "repair",
      category: "修理フェイズ",
      title: "修理（作業員連携）",
      summary:
        "修理場所が空いていれば移動。点検票を見て無償点検か有償修理かを作業員に伝える。完了後は引取待機場所へ。",
      steps: [
        "空きがあれば修理場所へ自転車を移動",
        "点検票を確認し「無償点検です」「有償修理です」などと作業員へ伝える",
        "作業員が点検内容・金額を記入。手伝いは指示に従う。完了後は引取待機場所へ",
      ],
      detail: [
        "修理場所が空いていたら自転車を修理場所に移動させます。",
        "点検票を確認し、作業員に無償点検か有償修理かを伝えます（下の台詞例を参照）。",
        "点検・修理は作業員が行います。受付表の下にある点検内容や金額の記入欄は、作業員が記入してくれます。",
        "空気入れなど、簡単な修理の手伝いを任せられることがあります。作業員の言うことをよく聞いて行動してください。",
        "すべての工程が完了したら、自転車を引取待機場所に運びます。",
      ],
      dialogue: {
        title: "作業員への声かけ例",
        lines: [
          { role: "GI", text: "有償修理/無償点検です。お願いします。" },
        ],
      },
    },
    {
      id: "pickup",
      category: "引取フェイズ",
      title: "引取（無償・有償・会計）",
      summary:
        "引換証を受け取ってから対応番号の自転車を渡す。有償は受渡前に代金を受領。二役が金銭を監督し30分ごとに突合。",
      steps: [
        "必ず引換証を受け取ってから、番号の一致する点検票の自転車を出す",
        "点検票を見て内容を説明。チラシを渡して完了。アンケートは読み込みを促す（強制しない）",
        "有償は渡す前に点検票最下部の金額を受取。お釣りは電卓。二役が金銭監督＋30分ごと確認とタイムスタンプ",
      ],
      detail: [
        "【無償点検のお客様】引換証を受け取って、対応する自転車を持ってきます。対応する番号の点検票を見て点検内容をお伝えします。\n（自転車・点検票・引換証　で全て同じ番号にする）\n引換証の受け取りを忘れないでください。最後にチラシを渡します（※）。",
        "【有償修理・お金関連は超重要】引換証を受け取って、対応する自転車を持ってきます。有償の場合は作業員さんを呼んで、点検票を見て内容を伝えてもらいます。引換証の受け取り忘れに注意してください。",
        "受け渡す前に、点検票の一番下に書いてある金額を受け取ります。二役はお金のやり取りをしっかり監督します。特に30分ごとに金銭の矛盾がないか確認し、タイムスタンプを入れておきます。お釣りがある場合は電卓で計算し、お釣りを渡します。",
        "お金のやり取りが完了したら自転車を引き渡し、最後にチラシを渡します（※）。",
        "\n※チラシ配布について：",
        "チラシ①、②を1枚ずつお渡しします。その後、お客さんが「学生生活110番」に登録しているか確認します。",
        "〈登録している場合〉チラシ③を渡して「web会員証」の利用を勧めます。お客さんが利用してくれた場合、うまい棒をプレゼントします。",
        "〈登録していない場合〉チラシ④を渡して「学生生活110番」登録を勧めます。",
        "最後にアンケートフォームの読み取りをお願いします（強制はしないけど、やってくれると嬉しいなーという感じで）"
      ],
    },
    {
      id: "tidy",
      category: "整理フェイズ",
      title: "整理（待機・保管）",
      summary:
        "修理待機・引取待機の自転車は無償点検と有償修理で分けて保管。鍵が付いたままになりやすいので盗難防止に注意。",
      steps: [
        "待機中の自転車は無償と有償で分けて置く",
        "鍵付きのままになりやすいので、きちんと見張る",
        "人員に余裕があれば呼び込み",
      ],
      detail: [
        "修理待機または引取待機状態の自転車は、無償点検か有償修理かで分けて保管します。",
        "これらの自転車には基本的に鍵が付いたままになることが多いので、盗難などに遭わないようきちんと見張ってください。",
        "人員に余裕があれば呼び込みを行ってください。",
      ],
    },
    {
      id: "guidance",
      category: "誘導フェイズ",
      title: "誘導・声かけ（会場周辺）",
      summary:
        "開催場所付近での声かけ・案内。興味のありそうな方への説明、他担当とのすり合わせ、声かけの例はこちら。",
      steps: [
        "担当はその他全員（人員配置の表とあわせて確認）",
        "会場付近で声かけ。できること・無料点検などを簡潔に伝える",
        "他担当が忙しそうなら手伝いに行く。講義前後は受付が混みやすいので注意",
        "正しい情報の範囲でよいが、しつこい勧誘はしない",
      ],
      detail: [
        "開催場所の付近で宣伝を行い、興味がありそうな方にはどのようなことができるか説明します。",
        "他の担当が忙しそうなときは臨機応変に手伝いに行きましょう。特に講義開始の前後の受付は混みやすいので注意してください。",
        "正しい情報であれば、どのように宣伝しても構いません。しつこい宣伝はしないでください。",
      ],
      dialogue: {
        title: "声かけの例",
        preface: "言い回しは正しい情報の範囲でアレンジ可。しつこくならないように。",
        lines: [
          { role: "GI", text: "自転車点検会開催してまーす！この機に自転車の調子を整えていきませんかー？" },
          { role: "GI", text: "点検は無料でできます！是非ご参加ください！" },
          { role: "GI", text: "パンク修理や部品交換もできます！" },
        ],
      },
    },
    {
      id: "staff",
      category: "人員配置",
      title: "役割分担と人数",
      summary:
        "受付3（うち1人は二役）、保管2。誘導・声かけは誘導フェイズを参照。",
      steps: [
        "受付3人（1人は二役）…受付・引取では自転車の移動以外",
        "保管2人…受付・整理・引取で自転車の移動",
        "誘導・宣伝の声かけは誘導フェイズの担当（その他全員）",
      ],
      detail: [
        "受付担当：3人（うち1人は二役であること）。受付フェイズ・引取フェイズでは、自転車の移動以外を行います。",
        "保管担当：2人。受付フェイズでは自転車の移動、整理フェイズでは一連の仕事、引取フェイズでは自転車の移動を行います。",
        "会場周辺の声かけ・案内・声かけ例などは「誘導フェイズ」のマニュアルにまとめています。",
      ],
    },
    {
      id: "map",
      category: "全体",
      title: "場内図・その他",
      summary: "場内図は PDF と詳細 SVG を用意しています。「概要」タブでこのページ内に表示され、「詳細」タブのボタンから別タブで開けます。当日の掲示・運営指示もあわせて確認してください。",
      steps: [],
      links: [
        { label: "場内図（PDF）", href: "./map.pdf" },
        { label: "場内図詳細（SVG）", href: "./map_detail.svg" },
      ],
      detail: ["当日配布の場内図・掲示・運営からの指示を最優先で確認してください。"],
    },
    {
      id: "photo",
      category: "全体",
      title: "撮影時の注意",
      summary: "記録のため、適宜撮影を行ってください。ただし肖像権のため注意事項があります",
      steps: [],
      detail: ["手が空いたらぜひスマホで撮影をしてください。ただし撮影者自身が被写体に前もって許可を得るか、GIがお客として来場した際に撮るようにしてください。撮影した画像は、当日運営グループのアルバムに入れてください"],
    },
  ],
};

const state = {
  openId: null,
  /** ドロワー内タブ: -1=なし, 1=概要・詳細の2つ, 2=台詞タブありで3つ */
  drawerTabMaxIndex: -1,
};

const els = {
  eventTitle: document.getElementById("event-title"),
  list: document.getElementById("manual-list"),
  hint: document.getElementById("result-hint"),
  empty: document.getElementById("empty-state"),
  jumpFirstYear: document.getElementById("jump-firstyear"),
  fontToggle: document.getElementById("font-toggle"),
  gate: document.getElementById("gate"),
  gateTitle: document.getElementById("gate-title"),
  gateDesc: document.getElementById("gate-desc"),
  gateIntro: document.getElementById("gate-intro"),
  gateIntroNext: document.getElementById("gate-intro-next"),
  gateYes: document.getElementById("gate-yes"),
  gateNo: document.getElementById("gate-no"),
  gateActionsAsk: document.getElementById("gate-actions-ask"),
  gateNotice: document.getElementById("gate-notice"),
  gateContinue: document.getElementById("gate-continue"),
  drawer: document.getElementById("drawer"),
  drawerHeader: document.querySelector("#drawer .drawer__header"),
  backdrop: document.getElementById("drawer-backdrop"),
  drawerClose: document.getElementById("drawer-close"),
  drawerBody: document.getElementById("drawer-body"),
  drawerCategory: document.getElementById("drawer-category"),
  drawerTitle: document.getElementById("drawer-title"),
  drawerSummary: document.getElementById("drawer-summary"),
  drawerStepsSection: document.getElementById("drawer-steps-section"),
  drawerSteps: document.getElementById("drawer-steps"),
  drawerFieldsSection: document.getElementById("drawer-fields-section"),
  drawerFieldsHeading: document.getElementById("drawer-fields-heading"),
  drawerFields: document.getElementById("drawer-fields"),
  drawerDetail: document.getElementById("drawer-detail"),
  drawerDialogueSection: document.getElementById("drawer-dialogue-section"),
  drawerDialogueHeading: document.getElementById("drawer-dialogue-heading"),
  drawerDialoguePreface: document.getElementById("drawer-dialogue-preface"),
  drawerDialogue: document.getElementById("drawer-dialogue"),
  drawerLinkWrap: document.getElementById("drawer-link-wrap"),
  drawerInlineWrap: document.getElementById("drawer-inline-wrap"),
  drawerInlineHost: document.getElementById("drawer-inline-host"),
  drawerLinks: document.getElementById("drawer-links"),
  drawerTabBar: document.getElementById("drawer-tab-bar"),
  drawerTabPanels: document.getElementById("drawer-tab-panels"),
  drawerTabPanel0: document.getElementById("drawer-tab-panel-0"),
  drawerTabPanel1: document.getElementById("drawer-tab-panel-1"),
  drawerTabPanel2: document.getElementById("drawer-tab-panel-2"),
  drawerTab0: document.getElementById("drawer-tab-0"),
  drawerTab1: document.getElementById("drawer-tab-1"),
  drawerTab2: document.getElementById("drawer-tab-2"),
};

function openGuidanceDialogue() {
  openDrawer("guidance");
  // openDrawer 内でタブ有無が確定するので、次フレームで「台詞」へ
  requestAnimationFrame(() => selectDrawerTab(2));
}

function getGuidanceCardEl() {
  if (!els.list) return null;
  return /** @type {HTMLElement|null} */ (els.list.querySelector('[data-id="guidance"]') || null);
}

function isMostlyInViewport(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  if (!vh) return false;
  // 「画面内に見えているか」を素直に判定（上部に張り付いた表示でも確実に隠す）
  const sticky = document.querySelector(".sticky-head");
  const topEdge = (sticky && "offsetHeight" in sticky ? sticky.offsetHeight : 0) + 8;
  return rect.bottom > topEdge && rect.top < vh;
}

function updateJumpFirstYearVisibility() {
  if (!els.jumpFirstYear) return;
  const gateOpen = Boolean(els.gate && !els.gate.hidden);
  const drawerOpen = Boolean(state.openId);
  const t = getGuidanceCardEl();
  const targetVisible = Boolean(t && isMostlyInViewport(t));
  els.jumpFirstYear.hidden = gateOpen || drawerOpen || targetVisible;
}

function initJumpFirstYear() {
  if (!els.jumpFirstYear || !els.list) return;

  const jump = () => {
    const t = getGuidanceCardEl();
    if (!t) return;
    t.scrollIntoView({ behavior: "smooth", block: "start" });
    try {
      t.focus({ preventScroll: true });
    } catch (_) {}
  };

  els.jumpFirstYear.addEventListener("click", jump);

  const t = getGuidanceCardEl();
  if (t && typeof IntersectionObserver !== "undefined") {
    const io = new IntersectionObserver(updateJumpFirstYearVisibility, {
      root: null,
      threshold: 0.2,
    });
    io.observe(t);
  }
  // IntersectionObserver が動かない/発火が遅い環境向けに、スクロール/リサイズでも再評価
  let raf = 0;
  const schedule = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      updateJumpFirstYearVisibility();
    });
  };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });

  // 初期状態も同期
  updateJumpFirstYearVisibility();
}

function initGate() {
  if (!els.gate || !els.gateIntro || !els.gateIntroNext || !els.gateYes || !els.gateNo) return;

  const key = "staff-year";
  // リロード時は必ず質問を出す（保存値でスキップしない）
  const ua = navigator.userAgent || "";
  const isLineInApp = /\bLine\/\d/i.test(ua);

  const showIntro = () => {
    if (els.gateTitle) els.gateTitle.textContent = "確認";
    if (els.gateDesc) els.gateDesc.textContent = "外部ブラウザで開くと動作が安定します。";
    els.gateIntro.hidden = false;
    if (els.gateActionsAsk) els.gateActionsAsk.hidden = true;
    if (els.gateNotice) els.gateNotice.hidden = true;
  };
  const showAsk = () => {
    if (els.gateTitle) els.gateTitle.textContent = "確認";
    if (els.gateDesc) els.gateDesc.textContent = "あなたは1年目スタッフですか？";
    els.gateIntro.hidden = true;
    if (els.gateActionsAsk) els.gateActionsAsk.hidden = false;
    if (els.gateNotice) els.gateNotice.hidden = true;
  };
  const showNotice = () => {
    if (els.gateTitle) els.gateTitle.textContent = "確認";
    if (els.gateDesc) els.gateDesc.textContent = "1年目の人はこの注意書きを確認してください。";
    els.gateIntro.hidden = true;
    if (els.gateActionsAsk) els.gateActionsAsk.hidden = true;
    if (els.gateNotice) els.gateNotice.hidden = false;
  };
  const open = () => {
    els.gate.hidden = false;
    els.gate.removeAttribute("hidden");
    if (!els.gateIntro.hidden) {
      els.gateIntroNext.focus({ preventScroll: true });
    } else if (els.gateActionsAsk && !els.gateActionsAsk.hidden) {
      els.gateYes.focus({ preventScroll: true });
    }
    // ジャンプボタンは updateJumpFirstYear 側で gate を見て隠れる
    updateJumpFirstYearVisibility();
  };
  const close = () => {
    els.gate.hidden = true;
    els.gate.setAttribute("hidden", "");
    // ジャンプボタンは updateJumpFirstYear 側で再評価される
    updateJumpFirstYearVisibility();
  };
  const proceed = () => {
    close();
    openGuidanceDialogue();
  };

  const proceedNone = () => {
    // 2年目以降は従来どおり一覧から選べるように、何も開かずに閉じる
    close();
  };

  const startFirstYearFlow = () => {
    // 「1年目」ボタンが押されるまで注意書きは見せない
    showNotice();
    // 注意書きを出し、確認ボタンを押したら進む
    els.gateContinue?.focus({ preventScroll: true });
  };

  els.gateYes.addEventListener("click", () => {
    localStorage.setItem(key, "1");
    startFirstYearFlow();
  });

  els.gateNo.addEventListener("click", () => {
    localStorage.setItem(key, "0");
    proceedNone();
  });

  els.gateContinue?.addEventListener("click", () => {
    proceed();
  });

  els.gateIntroNext.addEventListener("click", () => {
    showAsk();
    open();
  });

  document.addEventListener("keydown", (e) => {
    if (els.gate.hidden) return;
    if (e.key === "Escape") {
      // 誤タップの救済：保存を消して質問画面に戻す
      localStorage.removeItem(key);
      if (isLineInApp) showIntro();
      else showAsk();
      open();
    }
  });

  if (isLineInApp) showIntro();
  else showAsk();
  open();
}

/** @param {typeof CONFIG.manuals[0]} m */
function detailParagraphs(m) {
  const d = m.detail;
  if (!d) return [];
  if (Array.isArray(d)) {
    return d.map((p) => String(p).trim()).filter(Boolean);
  }
  const text = String(d).trim();
  if (!text) return [];
  const byBlank = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  if (byBlank.length > 1) return byBlank;
  return text.split("\n").map((p) => p.trim()).filter(Boolean);
}

function hasDialogueLines(m) {
  return Boolean(m.dialogue && Array.isArray(m.dialogue.lines) && m.dialogue.lines.length);
}

/** @param {string} role */
function dialogueRowKind(role) {
  const t = String(role || "").trim();
  if (/^注|^補足|^メモ/.test(t) || t === "注") return "note";
  if (/客|お客様/.test(t)) return "guest";
  if (/例|見本|セリフ例|声かけ/.test(t)) return "sample";
  return "staff";
}

function renderFieldList(m) {
  els.drawerFieldsSection.hidden = true;
  els.drawerFields.innerHTML = "";
  const list = m.fieldList;
  if (!list || !list.length) return;
  els.drawerFieldsSection.hidden = false;
  els.drawerFieldsHeading.textContent = m.fieldsTitle || "記入項目の目安";
  list.forEach(({ label, value }) => {
    const div = document.createElement("div");
    div.className = "field-item";
    div.innerHTML = `<div class="field-item__label">${escapeHtml(label)}</div><p class="field-item__value">${escapeHtml(value)}</p>`;
    els.drawerFields.appendChild(div);
  });
}

function renderDialogue(m) {
  els.drawerDialogueSection.hidden = true;
  els.drawerDialogue.innerHTML = "";
  els.drawerDialoguePreface.hidden = true;

  const dlg = m.dialogue;
  if (!dlg || !Array.isArray(dlg.lines) || !dlg.lines.length) return;

  els.drawerDialogueSection.hidden = false;
  els.drawerDialogueHeading.textContent = dlg.title || "対応例（台詞）";

  if (dlg.preface) {
    els.drawerDialoguePreface.hidden = false;
    els.drawerDialoguePreface.textContent = dlg.preface;
  }

  dlg.lines.forEach((line) => {
    const kind = dialogueRowKind(line.role);
    const row = document.createElement("div");
    row.className = `dialogue__row dialogue__row--${kind}`;
    const bubble = document.createElement("div");
    bubble.className = "dialogue__bubble";
    const roleEl = document.createElement("span");
    roleEl.className = "dialogue__role";
    roleEl.textContent = line.role || "GI";
    const p = document.createElement("p");
    p.className = "dialogue__text";
    p.textContent = line.text;
    bubble.appendChild(roleEl);
    bubble.appendChild(p);
    row.appendChild(bubble);
    els.drawerDialogue.appendChild(row);
  });
}

function selectDrawerTab(index) {
  const max = state.drawerTabMaxIndex;
  if (max < 0) return;
  const i = Math.max(0, Math.min(max, index));
  const tabs = [els.drawerTab0, els.drawerTab1, els.drawerTab2];
  const panels = [els.drawerTabPanel0, els.drawerTabPanel1, els.drawerTabPanel2];
  tabs.forEach((btn, j) => {
    if (!btn || btn.hidden) return;
    const on = j === i;
    btn.setAttribute("aria-selected", on ? "true" : "false");
    btn.tabIndex = on ? 0 : -1;
  });
  panels.forEach((panel, j) => {
    if (!panel) return;
    panel.classList.toggle("is-active", j === i);
    panel.scrollTop = 0;
  });
  els.drawerBody.scrollTop = 0;
}

function hasDetailOrFields(m) {
  if (m.fieldList && m.fieldList.length) return true;
  return detailParagraphs(m).length > 0;
}

function applyDrawerTabsAfterRender(m) {
  const hasDlg = hasDialogueLines(m);
  const hasDetail = hasDetailOrFields(m);
  const useThreeTabs = hasDlg && hasDetail;
  const useTwoTabs = !hasDlg && hasDetail;
  const useTabs = useThreeTabs || useTwoTabs;

  const panels = els.drawerTabPanels;
  const bar = els.drawerTabBar;
  const p2 = els.drawerTabPanel2;
  const tab2btn = els.drawerTab2;

  if (useTabs) {
    bar.hidden = false;
    panels.classList.remove("drawer-tab-panels--stacked");
    els.drawerBody.classList.add("drawer__body--tabs");

    const hasSteps = (m.steps || []).length > 0;
    const paras = detailParagraphs(m);
    const hasDetailParas = paras.length > 0;
    const hasFields = Boolean(m.fieldList && m.fieldList.length);

    if (useThreeTabs) {
      state.drawerTabMaxIndex = 2;
      tab2btn.hidden = false;
      p2.removeAttribute("hidden");
      let start = 0;
      if (!hasSteps && (hasFields || hasDetailParas)) start = 1;
      if (!hasSteps && !hasFields && !hasDetailParas) start = 2;
      selectDrawerTab(start);
    } else {
      state.drawerTabMaxIndex = 1;
      tab2btn.hidden = true;
      p2.removeAttribute("hidden");
      let start = 0;
      if (!hasSteps && (hasFields || hasDetailParas)) start = 1;
      selectDrawerTab(start);
    }
  } else {
    state.drawerTabMaxIndex = -1;
    bar.hidden = true;
    panels.classList.add("drawer-tab-panels--stacked");
    els.drawerBody.classList.remove("drawer__body--tabs");
    tab2btn.hidden = false;
    [els.drawerTabPanel0, els.drawerTabPanel1, els.drawerTabPanel2].forEach((p) => {
      if (!p) return;
      p.classList.remove("is-active");
      p.removeAttribute("hidden");
    });
    if (hasDialogueLines(m)) {
      p2.removeAttribute("hidden");
    } else {
      p2.setAttribute("hidden", "");
    }
    tabsResetAria();
  }
}

function tabsResetAria() {
  [els.drawerTab0, els.drawerTab1, els.drawerTab2].forEach((btn, j) => {
    if (!btn || btn.hidden) return;
    btn.setAttribute("aria-selected", j === 0 ? "true" : "false");
    btn.tabIndex = j === 0 ? 0 : -1;
  });
}

function renderList() {
  const items = CONFIG.manuals;
  els.list.innerHTML = "";

  const total = items.length;
  els.hint.textContent = total > 0 ? `全 ${total} 件` : "0 件";

  if (items.length === 0) {
    els.empty.hidden = false;
    return;
  }
  els.empty.hidden = true;

  items.forEach((m) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "manual-card";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.dataset.id = m.id;
    const firstYearBadge =
      m.id === "guidance"
        ? `<span class="manual-card__badge manual-card__badge--warn">一年生はこちら</span>`
        : "";
    btn.innerHTML = `
      <div class="manual-card__meta">
        <p class="manual-card__category">${escapeHtml(m.category)}</p>
        <span class="manual-card__chev" aria-hidden="true">›</span>
      </div>
      <h3 class="manual-card__title">${escapeHtml(m.title)}${firstYearBadge}</h3>
      <p class="manual-card__excerpt">${escapeHtml(m.summary)}</p>
    `;
    btn.addEventListener("click", () => openDrawer(m.id));
    li.appendChild(btn);
    els.list.appendChild(li);
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function findManual(id) {
  return CONFIG.manuals.find((m) => m.id === id) || null;
}

function resolveAssetHref(href) {
  const s = (href != null ? String(href) : "").trim();
  if (!s) return "";
  try {
    return new URL(s, window.location.href).href;
  } catch {
    return s;
  }
}

function collectDrawerLinkItems(m) {
  const items = [];
  if (Array.isArray(m.links) && m.links.length) {
    m.links.forEach((x) => {
      const href = (x && x.href != null ? String(x.href) : "").trim();
      const label = (x && x.label != null ? String(x.label) : "").trim();
      if (href) items.push({ label: label || "参考資料を開く", href });
    });
  } else {
    const u = (m.url || "").trim();
    if (u) items.push({ label: "参考資料を別タブで開く", href: u });
  }
  return items;
}

function renderDrawerInlineHost(items) {
  if (!els.drawerInlineHost) return false;
  els.drawerInlineHost.innerHTML = "";
  let any = false;
  items.forEach(({ label, href }) => {
    const path = href.split("?")[0].toLowerCase();
    if (!path.endsWith(".svg") && !path.endsWith(".pdf")) return;
    const resolved = resolveAssetHref(href);
    const block = document.createElement("div");
    block.className = "drawer-inline-block";
    const h = document.createElement("h4");
    h.className = "drawer-inline-title";
    h.textContent = label;
    block.appendChild(h);
    const frame = document.createElement("div");
    frame.className = "drawer-inline-frame";
    if (path.endsWith(".svg")) {
      const img = document.createElement("img");
      img.className = "drawer-inline-svg";
      img.src = resolved;
      img.alt = label;
      frame.appendChild(img);
      block.appendChild(frame);
    } else {
      const iframe = document.createElement("iframe");
      iframe.className = "drawer-inline-pdf";
      iframe.src = resolved;
      iframe.title = label;
      iframe.loading = "eager";
      frame.appendChild(iframe);
      block.appendChild(frame);
      const note = document.createElement("p");
      note.className = "drawer-inline-pdf-note";
      const a = document.createElement("a");
      a.href = resolved;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = `${label}を別タブで開く`;
      note.appendChild(a);
      block.appendChild(note);
    }
    els.drawerInlineHost.appendChild(block);
    any = true;
  });
  els.drawerInlineHost.hidden = !any;
  if (els.drawerInlineWrap) els.drawerInlineWrap.hidden = !any;
  return any;
}

function renderDrawerAttachments(m) {
  if (!els.drawerLinkWrap || !els.drawerLinks) return;
  const items = collectDrawerLinkItems(m);
  renderDrawerInlineHost(items);
  els.drawerLinks.innerHTML = "";
  items.forEach(({ label, href }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-secondary";
    btn.dataset.href = resolveAssetHref(href);
    btn.textContent = label;
    btn.setAttribute("aria-label", `${label}を別タブで開く`);
    els.drawerLinks.appendChild(btn);
  });
  if (els.drawerLinkWrap) els.drawerLinkWrap.hidden = items.length === 0;
}

function openDrawer(id) {
  const m = findManual(id);
  if (!m) return;
  state.openId = id;
  // スワイプ操作の途中で残った状態をリセット
  els.drawer.style.transition = "";
  els.drawer.style.transform = "";
  els.drawerBody.scrollTop = 0;

  els.drawerCategory.textContent = m.category;
  els.drawerTitle.textContent = m.title;
  els.drawerSummary.textContent = m.summary;

  const steps = m.steps || [];
  els.drawerStepsSection.hidden = steps.length === 0;
  els.drawerSteps.innerHTML = "";
  steps.forEach((text, idx) => {
    const row = document.createElement("div");
    row.className = "step";
    row.innerHTML = `
      <span class="step__num">${idx + 1}</span>
      <p class="step__text">${escapeHtml(text)}</p>
    `;
    els.drawerSteps.appendChild(row);
  });

  renderFieldList(m);

  const paragraphs = detailParagraphs(m);
  els.drawerDetail.innerHTML = "";
  if (paragraphs.length === 0) {
    const p = document.createElement("p");
    p.className = "drawer__detail-empty";
    p.textContent =
      "この項目には本文がありません。app.js の detail（段落の配列、または改行区切りの文字列）に追記してください。";
    els.drawerDetail.appendChild(p);
  } else {
    paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      els.drawerDetail.appendChild(p);
    });
  }

  renderDialogue(m);

  applyDrawerTabsAfterRender(m);

  renderDrawerAttachments(m);

  els.backdrop.hidden = false;
  els.drawer.classList.add("is-open");
  els.drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  els.drawerClose.focus({ preventScroll: true });
  updateJumpFirstYearVisibility();
}

function closeDrawer() {
  state.openId = null;
  state.drawerTabMaxIndex = -1;
  els.drawer.classList.remove("is-open");
  els.drawer.style.transition = "";
  els.drawer.style.transform = "";
  els.drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  els.backdrop.hidden = true;
  if (els.drawerLinks) els.drawerLinks.innerHTML = "";
  if (els.drawerInlineHost) {
    els.drawerInlineHost.innerHTML = "";
    els.drawerInlineHost.hidden = true;
  }
  if (els.drawerInlineWrap) els.drawerInlineWrap.hidden = true;
  if (els.drawerLinkWrap) els.drawerLinkWrap.hidden = true;
  els.drawerBody.classList.remove("drawer__body--tabs");
  updateJumpFirstYearVisibility();
}

function initFontToggle() {
  const key = "event-manual-font-large";
  const saved = localStorage.getItem(key) === "1";
  if (saved) {
    document.documentElement.classList.add("font-large");
    els.fontToggle.setAttribute("aria-pressed", "true");
  }
  els.fontToggle.addEventListener("click", () => {
    const on = document.documentElement.classList.toggle("font-large");
    els.fontToggle.setAttribute("aria-pressed", on ? "true" : "false");
    localStorage.setItem(key, on ? "1" : "0");
  });
}

function initDrawerUi() {
  els.drawerClose.addEventListener("click", closeDrawer);
  els.backdrop.addEventListener("click", closeDrawer);
  els.drawerLinks?.addEventListener("click", (e) => {
    const btn = /** @type {HTMLElement|null} */ (e.target instanceof Element ? e.target.closest("button[data-href]") : null);
    if (!btn) return;
    const url = btn.dataset.href;
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  });
  els.drawerTabBar.querySelectorAll(".drawer-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-tab"), 10);
      if (Number.isFinite(i)) selectDrawerTab(i);
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.openId) closeDrawer();
    if (!state.openId || els.drawerTabBar.hidden) return;
    const ae = document.activeElement;
    if (!ae || !els.drawerTabBar.contains(ae)) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const max = state.drawerTabMaxIndex;
      if (max < 0) return;
      const tabs = [els.drawerTab0, els.drawerTab1, els.drawerTab2];
      const cur = tabs.findIndex((t) => t && !t.hidden && t.getAttribute("aria-selected") === "true");
      if (cur < 0) return;
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = (cur + dir + (max + 1)) % (max + 1);
      e.preventDefault();
      selectDrawerTab(next);
      tabs[next]?.focus();
    }
  });

  // 上部（ヘッダー/サマリー）を下にスワイプして閉じる
  const attachSwipeClose = (targetEl) => {
    if (!targetEl) return;
    let dragging = false;
    let startY = 0;
    let lastY = 0;
    const threshold = 90;
    let touchId = null;
    let recentlyPointer = false;

    const onDown = (e) => {
      if (!state.openId) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // ×ボタン等の操作を邪魔しない（あたり判定の重なり対策）
      const target = /** @type {Element|null} */ (e.target instanceof Element ? e.target : null);
      if (target && target.closest("button, a, input, textarea, select, [role='button']")) return;
      dragging = true;
      startY = e.clientY;
      lastY = e.clientY;
      recentlyPointer = true;
      targetEl.setPointerCapture?.(e.pointerId);
      // 追従中はトランジション無し
      els.drawer.style.transition = "none";
    };

    const onMove = (e) => {
      if (!dragging) return;
      lastY = e.clientY;
      const dy = Math.max(0, lastY - startY);
      if (dy > 0) {
        // スクロールではなくシートを引き下げている感を優先
        e.preventDefault?.();
      }
      els.drawer.style.transform = `translateY(${dy}px)`;
    };

    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      recentlyPointer = false;
      targetEl.releasePointerCapture?.(e.pointerId);
      const dy = Math.max(0, lastY - startY);

      // 元の transition に戻す（閉じない場合はスナップバック）
      els.drawer.style.transition = "";
      if (dy >= threshold) {
        closeDrawer();
        return;
      }
      // CSS の .drawer.is-open の transform に戻す
      els.drawer.style.transform = "";
    };

    // Pointer Events（対応ブラウザ向け）
    targetEl.addEventListener("pointerdown", onDown, { passive: true });
    targetEl.addEventListener("pointermove", onMove, { passive: false });
    targetEl.addEventListener("pointerup", onUp, { passive: true });
    targetEl.addEventListener(
      "pointercancel",
      (e) => {
        if (!dragging) return;
        dragging = false;
        recentlyPointer = false;
        els.drawer.style.transition = "";
        els.drawer.style.transform = "";
        targetEl.releasePointerCapture?.(e.pointerId);
      },
      { passive: true }
    );

    // Touch Events（iOS Safari などのフォールバック）
    targetEl.addEventListener(
      "touchstart",
      (e) => {
        if (!state.openId) return;
        // Pointer と touch が両方来る環境で二重発火しないように
        if (recentlyPointer) return;
        const t = e.touches && e.touches[0];
        if (!t) return;
        const target = /** @type {Element|null} */ (e.target instanceof Element ? e.target : null);
        if (target && target.closest("button, a, input, textarea, select, [role='button']")) return;
        touchId = t.identifier;
        dragging = true;
        startY = t.clientY;
        lastY = t.clientY;
        els.drawer.style.transition = "none";
      },
      { passive: true }
    );

    targetEl.addEventListener(
      "touchmove",
      (e) => {
        if (!dragging) return;
        const touches = e.touches;
        if (!touches || touches.length === 0) return;
        // Array.from を避けて軽量に
        let t = touches[0];
        if (touchId !== null) {
          for (let i = 0; i < touches.length; i += 1) {
            if (touches[i].identifier === touchId) {
              t = touches[i];
              break;
            }
          }
        }
        lastY = t.clientY;
        const dy = Math.max(0, lastY - startY);
        if (dy > 0) e.preventDefault();
        els.drawer.style.transform = `translateY(${dy}px)`;
      },
      { passive: false }
    );

    targetEl.addEventListener(
      "touchend",
      () => {
        if (!dragging) return;
        dragging = false;
        touchId = null;
        recentlyPointer = false;
        const dy = Math.max(0, lastY - startY);
        els.drawer.style.transition = "";
        if (dy >= threshold) {
          closeDrawer();
          return;
        }
        els.drawer.style.transform = "";
      },
      { passive: true }
    );

    targetEl.addEventListener(
      "touchcancel",
      () => {
        if (!dragging) return;
        dragging = false;
        touchId = null;
        recentlyPointer = false;
        els.drawer.style.transition = "";
        els.drawer.style.transform = "";
      },
      { passive: true }
    );
  };

  attachSwipeClose(els.drawerHeader);
  attachSwipeClose(els.drawerSummary);
}

function init() {
  els.eventTitle.textContent = CONFIG.eventTitle;
  renderList();
  initJumpFirstYear();
  initDrawerUi();
  initFontToggle();
  initGate();
}

init();
