/* eslint-disable */
export const updateTime = () => {
  const currentDate = new Date();
  const options = {
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  let formattedDate = currentDate.toLocaleString('en-US', options);
  formattedDate = formattedDate.replace('At', ',');

  document.getElementById('date').innerHTML = formattedDate;
  setTimeout(updateTime, 6000);
};

