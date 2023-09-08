export default function Card({
  employee_name,
  employee_salary,
  employee_age,
  image: { profile_image, description },
  personal_info: { address, phone_number, zipcode },
}) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
  <div class="card-img">
    <img src="${profile_image}" alt="${description}" class="card-avatar">
    </div>
    <div class="card-info">
      <p class="card-info_title">Nombre: ${employee_name}</p>
      <p class="card-info_subtitle">Edad: ${employee_age} años</p>
      <p class="card-info_subtitle">Salario: $${employee_salary.toFixed(2)}</p>
      <p class="card-info_subtitle">Dirección: ${address}</p>
      <p class="card-info_subtitle">Teléfono: ${phone_number}</p>
      <p class="card-info_subtitle">Código Postal: ${zipcode}</p>
    </div>
  `;

  return card;
}
