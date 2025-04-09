import { toPng } from 'html-to-image';
import './style.css';


/**
 * random student card bars code
 */
function renderBarsCode(): void {
  const barsCode: HTMLElement | null = document.getElementById('bars-code');

  for (let i: number = 0; i < 20; ++i) {
    const simpleBarCode: HTMLElement = document.createElement('div');
    simpleBarCode.classList.add('simple-bar-code');

    const insideSimpleBarCode: HTMLElement = document.createElement('div');
    insideSimpleBarCode.classList.add('inside-simple-barcode');
    insideSimpleBarCode.style.width = `${Math.floor(Math.random() * (90 - 20 + 1)) + 20}%`;

    simpleBarCode.append(insideSimpleBarCode);
    barsCode?.append(simpleBarCode);
  }
}

/**
 * render chip card using svg
 */
function renderChipCard(): void {
  const canvas: HTMLElement | null = document.getElementById('chip-card')
  if (!canvas) return;
  (canvas as HTMLCanvasElement).width = canvas.offsetWidth;
  (canvas as HTMLCanvasElement).height = canvas.offsetHeight;
  const c = (canvas as HTMLCanvasElement).getContext('2d');
  if (!c) return;
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  c.beginPath();
  c.fillStyle = "#FEBA17"
  c.fillRect(0, 0, w, h);
  c.moveTo(w / 3, 0);
  c.lineTo(w / 3, h);
  c.moveTo(w * 2 / 3, 0);
  c.lineTo(w * 2 / 3, 5);
  c.moveTo(0, h / 3);
  c.lineTo(w / 3, h / 3);
  c.moveTo(0, h * 2 / 3);
  c.lineTo(w / 3, h * 2 / 3);
  c.moveTo(w / 3, 5);
  c.lineTo(w * 2 / 3, 5);
  c.moveTo(w / 3, h - 5);
  c.lineTo(w * 2 / 3, h - 5);
  c.moveTo(w * 2 / 3, h / 3);
  c.lineTo(w * 2 / 3, h);
  c.moveTo(w * 2 / 3, h / 3);
  c.lineTo(w, h / 3);
  c.moveTo(w * 2 / 3, h * 2 / 3);
  c.lineTo(w, h * 2 / 3);
  c.stroke();
}

/**
 * render the wave
 */
function renderWave(): void {
  const canvas: HTMLElement | null = document.getElementById('wave-card')
  if (!canvas) return;
  (canvas as HTMLCanvasElement).width = canvas.offsetWidth;
  (canvas as HTMLCanvasElement).height = canvas.offsetHeight;
  const c = (canvas as HTMLCanvasElement).getContext('2d');
  if (!c) return;
  // const w = canvas.offsetWidth;
  // const h = canvas.offsetHeight;
  c.beginPath();
  c.strokeStyle = '#0D4715'
  c.arc(0, 15, 10, -Math.PI / 6, Math.PI / 6);
  c.lineWidth = 3;
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(2, 15, 14, -Math.PI / 6, Math.PI / 6);
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(4, 15, 18, -Math.PI / 6, Math.PI / 6);
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(6, 15, 22, -Math.PI / 6, Math.PI / 6);
  c.stroke();
  c.closePath();
}

renderChipCard();
renderBarsCode();
renderWave();

function renderSeriNumber(): void {
  const seriNumberElement = document.getElementById('seri-card');
  const simpleSeri1: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const simpleSeri2: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const simpleSeri3: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const simpleSeri4: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const simpleSeri5: number = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  if (seriNumberElement) {
    seriNumberElement.innerHTML = `${simpleSeri1} ${simpleSeri2} ${simpleSeri3} ${simpleSeri4} ${simpleSeri5}`;
  }
}

renderSeriNumber()

/**
 * random barcode and seri number
 */
document.getElementById('random-barcode-button')?.addEventListener('click', () => {
  // remove bars code
  const barsCode: HTMLElement | null = document.getElementById('bars-code');
  if (barsCode) {
    barsCode.innerHTML = "";
  }
  renderBarsCode();
});

document.getElementById('random-seri-number')?.addEventListener('click', () => {
  renderSeriNumber();
});

/**
 * input data student card
 */
const fullNameInput: HTMLElement | null = document.getElementById('fullname');
const displayFullName: HTMLElement | null = document.getElementById('full-name');
fullNameInput?.addEventListener('input', () => {
  const fullNameValue = (fullNameInput as HTMLInputElement).value.toUpperCase();
  if (displayFullName) {
    if (!fullNameValue) {
      displayFullName.innerHTML = 'HỌ VÀ TÊN';
    } else {
      displayFullName.innerHTML = fullNameValue;
    }
  }
})

const majorInput: HTMLElement | null = document.getElementById('major-input');
const displayMajor: HTMLElement | null = document.getElementById('major-name');
majorInput?.addEventListener('input', () => {
  const majorValue = (majorInput as HTMLInputElement).value;
  if (displayMajor) {
    if (!majorValue) {
      displayMajor.innerHTML = `Ngành: Chuyên ngành`;
    } else {
      displayMajor.innerHTML = `Ngành: ${majorValue}`;
    }
  }
})


const facultyInput: HTMLElement | null = document.getElementById('faculty-input');
const displayFaculty: HTMLElement | null = document.getElementById('faculty-name');
facultyInput?.addEventListener('input', () => {
  const value = (facultyInput as HTMLInputElement).value;
  if (displayFaculty) {
    if (!value) {
      displayFaculty.innerHTML = `Khoa: Chuyên ngành`;
    } else {
      displayFaculty.innerHTML = `Khoa: ${value}`;
    }
  }
})

const courseInput: HTMLElement | null = document.getElementById('course-time-input');
const displayCourse: HTMLElement | null = document.getElementById('course-data');
courseInput?.addEventListener('input', () => {
  const value = (courseInput as HTMLInputElement).value;
  const begin = document.getElementById('begin-limited-card');
  const end = document.getElementById('end-limited-card');
  if (displayCourse) {
    if (!value) {
      displayCourse.innerHTML = `Niên khoá:`;
    } else {
      displayCourse.innerHTML = `Niên khoá: ${value} - ${parseInt(value) + 4}`;
      if (begin && end) {
        begin.innerHTML = `09/${value.toString().substring(2, 4)}`;
        end.innerHTML = `09/${(parseInt(value) + 4).toString().substring(2, 4)}`
      }
    }
  }
})

const dateInput: HTMLElement | null = document.getElementById('born-input');
const displayDate: HTMLElement | null = document.getElementById('born-date');
dateInput?.addEventListener('input', () => {
  const date: Date = new Date((dateInput as HTMLInputElement).value);
  if (displayDate) {
    if (displayDate) {
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-based
      const year = date.getFullYear();
      displayDate.innerHTML = `Ngày sinh: ${day >= 10 ? day : '0' + day}/${month >= 10 ? month : '0' + month}/${year}`;
    }
  }
});

const studentIdInput: HTMLElement | null = document.getElementById('student-id-input');
const displayStudentId: HTMLElement | null = document.getElementById('student-id');
studentIdInput?.addEventListener('input', () => {
  const value = (studentIdInput as HTMLInputElement).value;
  if (displayStudentId) {
    if (!value) {
      displayStudentId.innerHTML = `00000000`;
    } else {
      displayStudentId.innerHTML = `${value}`;
    }
  }
})


const studentImageInput: HTMLElement | null = document.getElementById('image-input');
const displayStudentImage: HTMLElement | null = document.getElementById('student-image');
studentImageInput?.addEventListener('change', () => {
  const file: File | undefined = (studentImageInput as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (displayStudentImage) {
        displayStudentImage.setAttribute('src', event.target?.result as string);
      }
    };
    reader.readAsDataURL(file);
  }
})


/**
 * save student card image
 */
const saveImageButton: HTMLElement | null = document.getElementById('image-save-button');
saveImageButton?.addEventListener('click', () => {
  const studentCard: HTMLElement | null = document.querySelector('.student-card');

  if (!studentCard) return;
  toPng(studentCard, { pixelRatio: 2 })
    .then(dataUrl => {
      const link = document.createElement("a");
      link.href = dataUrl;
      let imgName: string = (fullNameInput as HTMLInputElement).value;
      imgName = imgName.replace(/ /g, "_");
      link.download = `${imgName}_nlu_student_card.png`;
      link.click();
    })
    .catch(err => {
      console.error("Lỗi khi chụp ảnh:", err);
    });
})