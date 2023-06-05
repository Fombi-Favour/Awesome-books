const date = document.querySelector('#date');
const { DateTime } = window.luxon;
const updateDate = () => {
  date.innerHTML = DateTime.now().toLocaleString({
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export default updateDate;