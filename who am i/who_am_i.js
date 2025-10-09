
const $ = (id) => document.getElementById(id);
const setStatus = (msg, kind = "info") => {
  const el = $("id_status");
  el.textContent = msg || "";
  el.style.color =
    kind === "error" ? "#dc2626" : kind === "ok" ? "#16a34a" : "#6b7280";
};

window.__publicIP = null;

window.addEventListener("DOMContentLoaded", () => {
  const btn = $("id_btn_get_ip");
  const btn2 = $("id_btn_get_ip_2");
  const out = $("id_output_ip");
  const out2 = $("id_output_ip_2");
  let ip;
  btn2.disabled = false;

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    setStatus("Fetching IP…");
    out.textContent = "—";

    try {
      const res = await fetch("https://api.ipify.org?format=json", {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      ip = data?.ip?.trim();
      if (!ip) throw new Error("No IP returned");

      window.__publicIP = ip;
      out.textContent = ip;
      setStatus("IP fetched successfully ✅", "ok");

      console.log("Public IP:", ip);

      btn2.disabled = false;

    } catch (e) {
      setStatus(`Error: ${e.message || e}`, "error");
      window.__publicIP = null;
      out.textContent = "—";
      btn2.disabled = true; 
    } finally {
      btn.disabled = false;
    }
  });

  btn2.addEventListener("click", async () => {
    if (!window.__publicIP) {
      setStatus("No IP found. Get IP first!", "error");
      return;
    }

    btn2.disabled = true;
    setStatus("Fetching details…");
    out2.textContent = "";

    try {
      const res2 = await fetch(`https://ipinfo.io/${window.__publicIP}/json`, {
        headers: { Accept: "application/json" },
      });
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);

      const data = await res2.json();
      console.log(data);

      for (const key in data) {
        if (Object.hasOwn(data, key)) {
          const value = data[key];
          out2.textContent += `${key}: ${value}\n`;
        }
      }

      setStatus("Details fetched successfully ✅", "ok");
    } catch (e) {
      setStatus(`Error: ${e.message || e}`, "error");
    } finally {
      btn2.disabled = false;
    }
  });
});
