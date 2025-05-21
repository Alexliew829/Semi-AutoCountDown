const webhookURL = 'https://hook.us2.make.com/t0eauojx3t4t5wmwmqy6h5ch1vpxw7xj';

document.getElementById('submitBtn').addEventListener('click', async () => {
  const postId = document.getElementById('postIdInput').value.trim();
  const statusEl = document.getElementById('status');

  if (!postId || postId.length < 6) {
    statusEl.innerText = '❌ 請輸入有效的 Post ID';
    return;
  }

  statusEl.innerText = '⏳ 正在提交中...';

  try {
    const res = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post_id: postId })
    });

    if (res.ok) {
      statusEl.innerText = '✅ 提交成功，已開始流程';
    } else {
      statusEl.innerText = '❌ 提交失敗，請檢查 webhook 設置';
    }
  } catch (e) {
    console.error(e);
    statusEl.innerText = '⚠️ 網絡錯誤，請稍後再試';
  }
});
