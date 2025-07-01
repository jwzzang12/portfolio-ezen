const projectData = [
  {
    img: './images/korail-thumbnail.png',
    title: 'Korail Talk Mobile App Re-design',
    duration: '2025.04 – 2025.05',
    role: '팀 프로젝트',
    desc: '모든 연령층이 쉽게 사용할 수 있도록 코레일톡 앱의 복잡한 예매 경험을 개선한 UX/UI 리디자인 프로젝트입니다. UX 리서치부터 와이어프레임 제작, 디자인 일부, 발표 자료 구성까지 프로젝트 전반에 참여했습니다.',
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/v3PY9Mx7L6RzkZXizwaLq2/%EC%BD%94%EB%A0%88%EC%9D%BC%ED%86%A1-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8--%EC%A0%9C%EC%B6%9C%EC%9A%A9-?m=auto&t=h3HbUI7ZpzjV6EXL-1',
      },
      { type: 'googleDrive', url: 'https://drive.google.com/file/d/13J5p5ln_Wcp0kq_5JYuO82PXnwYEiyxZ/view?usp=share_link' },
    ],
    thumbnailLink: 'https://drive.google.com/file/d/13J5p5ln_Wcp0kq_5JYuO82PXnwYEiyxZ/view?usp=share_link',
  },
  {
    img: './images/kbpay-thumbnail.png',
    title: 'KB Pay Mobile App Re-design',
    duration: '2025.05',
    role: '개인 프로젝트',
    desc: 'KB Pay 앱의 불편한 사용 흐름과 주요 기능 접근성 문제를 해결하여, 사용자 중심의 직관적이고 모던한 인터페이스로 새롭게 개선한 프로젝트입니다.',
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/SMrOjbM9FQgB4woZ4QzjHd/KB-Pay-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8-%EC%A0%9C%EC%B6%9C%EC%9A%A9-?node-id=0-1&t=CinN35OfawlyMpqm-1',
      },
      { type: 'googleDrive', url: 'https://drive.google.com/file/d/1n2i_DVfyO-em56_ha0minIJuBkJ2_0Es/view?usp=share_link' },
      { type: 'notion', url: 'https://www.notion.so/moonjiwon/KB-Pay-21b6c9f6b56680a0adcad1a59fbdb1d1?source=copy_link' },
    ],
    thumbnailLink: 'https://drive.google.com/file/d/1n2i_DVfyO-em56_ha0minIJuBkJ2_0Es/view?usp=share_link',
  },
  {
    img: './images/cinebite-thumbnail.png',
    title: 'Cinebite',
    duration: '2025.06',
    role: '팀 프로젝트',
    desc: '짧은 러닝타임 기반 영화 큐레이션 웹사이트 입니다. 사용자가 원하는 영화 길이를 슬라이더로 설정하면, 그에 맞는 영화를 추천해주는 웹서비스입니다. 간결한 UI와 테마별 큐레이션으로 빠르게 영화 탐색이 가능합니다.',
    links: [
      {
        type: 'figma',
        url: 'https://www.figma.com/design/QK9ZZH5PkrdOGvamo3XEmI/%EC%8B%9C%EB%84%A4%EB%B0%94%EC%9D%B4%ED%8A%B8--%EC%A0%9C%EC%B6%9C%EC%9A%A9-?node-id=1269-357&t=5bLS1dn9FwH9I8dL-1',
      },
      { type: 'website', url: 'https://minoh2.github.io/cinebite/' },
    ],
    thumbnailLink: 'https://minoh2.github.io/cinebite/',
  },
];

const buttons = document.querySelectorAll('.project__menu button');
const img = document.querySelector('.project__image img');
const thumbnailLink = document.querySelector('.project__image a');
const title = document.querySelector('.project__title');
const duration = document.querySelector('.project__duration');
const role = document.querySelector('.project__role');
const desc = document.querySelector('.project__desc');
const link = document.querySelector('.project__link');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const data = projectData[index];

    let linkHtml = data.links
      .map((item) => {
        let icon = '';

        if (item.type === 'figma') {
          icon = '<i class="fa-brands fa-figma"></i>';
        } else if (item.type === 'googleDrive') {
          icon = '<i class="fa-brands fa-google-drive"></i>';
        } else if (item.type === 'notion' || 'website') {
          icon = '<i class="fa-solid fa-link"></i>';
        }

        return `<span><a href="${item.url}" target="_blank">${icon}</a></span>`;
      })
      .join('');

    img.src = data.img;
    title.textContent = data.title;
    duration.textContent = data.duration;
    role.textContent = data.role;
    desc.textContent = data.desc;
    link.innerHTML = linkHtml;
    thumbnailLink.href = data.thumbnailLink;

    document.querySelectorAll('.project__menu li').forEach((li) => li.classList.remove('active'));
    btn.parentElement.classList.add('active');
  });
});

(() => {
  const data = projectData[0];

  let linkHtml = data.links
    .map((item) => {
      let icon = '';
      let label = '';

      if (item.type === 'figma') {
        icon = '<i class="fa-brands fa-figma"></i>';
      } else if (item.type === 'googleDrive') {
        icon = '<i class="fa-brands fa-google-drive"></i>';
      }

      return `<span><a href="${item.url}" target="_blank">${icon}</a></span>`;
    })
    .join('');

  img.src = data.img;
  title.textContent = data.title;
  duration.textContent = data.duration;
  role.textContent = data.role;
  desc.textContent = data.desc;
  link.innerHTML = linkHtml;
  thumbnailLink.href = data.thumbnailLink;
})();

const body = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const contact = document.getElementById('contact');

window.addEventListener('scroll', () => {
  const contactTop = contact.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contactTop < windowHeight && contactTop + contact.offsetHeight > 0) {
    body.classList.add('black');
  } else {
    body.classList.remove('black');
  }
});
