/**
 * Accessible Tabs & Native Dialog Helpers (Vanilla ES6+)
 */

export function initTabs(tablistSelector) {
  const tablist = document.querySelector(tablistSelector);
  if (!tablist) return;

  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        const panelId = t.getAttribute('aria-controls');
        if (panelId) {
          const panel = document.getElementById(panelId);
          if (panel) panel.hidden = !selected;
        }
      });
    });
  });
}

export function bindModal(triggerSelector, dialogSelector) {
  const trigger = document.querySelector(triggerSelector);
  const dialog = document.querySelector(dialogSelector);
  if (!trigger || !dialog) return;

  trigger.addEventListener('click', () => dialog.showModal());
  dialog.addEventListener('close', () => {
    dialog.returnValue = '';
  });
}
