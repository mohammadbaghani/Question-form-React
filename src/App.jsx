import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import './index.css';
import 'swiper/css';
import For from './Form';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';
import Todo from './Todo/Todo';
import './TodoList.css';
import Chart from './Chart';
import Header from './Header';
import { FreeMode, Navigation, Thumbs, Pagination, A11y } from 'swiper/modules';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Table } from 'react-bootstrap';
import { SwiperNavButtons } from './SwiperNavButton';
import Container from '@mui/material/Container';
export default function App() {
  const steps = [
    {
      label: 'ثبت نام',
    },
    {
      label: 'حسابداری',
    },
    {
      label: 'خزانه',
    },
    {
      label: 'مهارتهای عمومی',
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const stepone = () => {
    setActiveStep(0);

  };
  const step4 = () => {
    setActiveStep(3);

  };
  const stepthree = () => {
    setActiveStep(2);

  };
  const steptow = () => {

    setActiveStep(1);

  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [userName, setUserName] = useState('حساب کاربری')
  const registerHandler = event => {
    setFirstName(event.target.value)
    event.preventDefault()
    let userInfo = {
      firstName,
      lastName
    }
    fetch('https://englisho-data-base-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(userInfo)
    }).then(response => console.log(response))
  }
  function user() {
    if (lastName && firstName) {
      setUserName(firstName)
    }
    else {
      setUserName('')
      setLastName('')
      setFirstName('')
      alert('همه فیلد ها را پر نمایید')

    }

  }

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingone, setRatingone] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [hoverone, setHoverone] = useState(0);
  const [show, setShow] = useState(false);
  const [A, setA] = useState([]);
  const [B, setB] = useState([]);
  const [C, setC] = useState([]);
  function chartshow() {
    setShow('true')

  }
  function charthide() {
    setShow(false)

  }
  function todoTitleHandler(event) {
    if (C.length === 4) {
      setShow('true')
    }
    let newTodoObject = {
      id: A.length + 1,
      title: event.target.value,
    }

    setA([]);
    setA([...A, newTodoObject]);
    const savedItem = localStorage.getItem("name");
    const parsedItem = JSON.parse(savedItem);
    setB(parsedItem);
  }
  function r(event) {
    if (C.length === 4) {
      setShow('true')
    }

    let empty = {
      id: C.length + 1,

      t: event.target.value,

    }
    let newTodoObject = {
      id: C.length + 1,

      t: event.target.value,

    }
    setC(['']);
    setC([...C, newTodoObject]);


  }

  const buttonRef = useRef(null);

  const cc = () => {
    onClick = { toSlide }
    ref = { buttonRef }
  };
  function prompt() {
    for (var i = 0; i < 4; i++) {

      alert('g')
    }
  }
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(A));
  }, [A]);
  return (
    <>
      <hr className='hr'>
      </hr>
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical" maxWidth="xl">

            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption"> {step.index}</Typography>
                    ) : null
                  }
                  className='stepp' >
                  {step.label}
                </StepLabel>

              </Step>
            ))}

          </Stepper>

        </Box>

      </Container>


      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}

        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, A11y, Pagination]}
        className="mySwiper2"

        slidesPerView="auto"
      >
        <SwiperSlide>

          <div className="register-body"  >
            <li className='moshakhasat  title-info'>
              ثبت نام
            </li>
            <li className='moshakhasat'>
              نام و نام خانوادگی خود را وارد نمایید
            </li>

            <div className="form-container">
              <form className="register-form" autoComplete="on" onSubmit={registerHandler}>     <span className="dw">
                نام کاربری
              </span>
                <input
                  id="first-name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="form-field"
                  type="text"
                  placeholder="نام را وارد نمایید"
                  name="firstName" />
                <span className="dw">
                  رمز عبور
                </span>
                <input
                  id="last-name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="form-field"
                  type="password"
                  placeholder="مثال : 123456" />

                <button variant="outline-primary" className="form-enter" type="submit" onClick={user}  >      ثبت نام</button>
              </form>
            </div>

          </div >

        </SwiperSlide>
        <SwiperSlide>
          <div className="App">

            <h1 className='myh'
            >             اطلاعات
              شما در حسابداری چه میزان است؟


            </h1>

            <div>
              {
                [1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setRating(num)}
                    onMouseOver={() => setHover(num)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span
                      className={//5<=5
                        `star ${num <= (rating || hover)
                          ? 'on' : 'off'
                        }`
                      }
                    >&#9733;</span>
                  </button>
                ))
              }
            </div>
          </div >
        </SwiperSlide>
        <SwiperSlide>
          <div className="App">

            <h1 className='myh'>            مهارت شما در
              خزانه



              چه قدر است؟</h1>
            <div>
              {
                [1, 2, 3, 4, 5].map((nume) => (
                  <button
                    key={nume}
                    onClick={() => setRatingone(nume)}
                    onMouseOver={() => setHover(nume)}
                    onMouseLeave={() => setHover(ratingone)}
                  >
                    <span
                      className={
                        `star ${nume <= (ratingone || hoverone)
                          ? 'on' : 'off'
                        }`
                      }
                    >&#9733;</span>
                  </button>
                ))
              }
            </div>
          </div >
        </SwiperSlide>

        <SwiperSlide>
          <div className='containerinput'>


            <button onClick={charthide} className={show ? 'cent-btn ' : 'cent-btn  hiddenbtn '}>
            نمایش جدول
 
            </button>
            <button onClick={chartshow} className={show ? 'cent-btn hiddenbtn ' : 'cent-btn '}>
         
            نمایش نمودار

            </button>
    

            <form

              className={show ? "all-todos hide" : "all-todos"}>

              <div className="select">
                <select name="todos" className="filter-todo" onChange={todoTitleHandler}>
                  <option value="خزانه" className="option-todo">خزانه</option>
                  <option className="option-todo" value="عمومی">عمومی</option>
                  <option value="حسابداری" className="option-todo">حسابداری</option>
                  <option className="option-todo" value="گزارشات">گزارشات</option>
                </select>
              </div>
            </form>


            <form


              className={show ? "left-all hide" : "left-all"}>




              <div className="select">
                <select name="todos" className="filter-todo left-f" onChange={r}>

                  <option value="5" className="option-todo">پنج</option>
                  <option value="10" className="option-todo">ده</option>
                  <option className="option-todo" value="15">پانزده</option>

                  <option className="option-todo" value="20">بیست</option>

                </select>
              </div>


            </form>



            <div className="todo-container">


              <ul


                className={show ? "todo-list hide" : "todo-list"}>




                <Table striped bordered hover>
                  <thead className='thead'>
                    <tr className='table-row'>
                      <th>نمره</th>


                      <th>توانایی</th>

                      <th >ردیف</th>
                    </tr>
                  </thead>

                </Table>


                <Todo {...A[0]} {...C[0]} />
                <Todo {...A[1]} {...C[1]} />
                <Todo {...A[2]} {...C[2]} />
                <Todo {...A[3]} {...C[3]} />

              </ul>



              <div className={show ? "vvvv" : "vvvv hide"}>

                <Chart {...C[0]} {...B[0]} />

                <Chart {...C[1]} {...B[1]} />


                <Chart {...C[2]}{...B[2]} />
                <Chart {...C[3]} {...B[3]} />


              </div>

            </div>


          </div>
        </SwiperSlide>

        <SwiperNavButtons a={handleNext} b={handleBack} stepone={stepone} steptow={steptow} stepthree={stepthree} step4={step4} />

      </Swiper>

      <Header my={userName} stepone={stepone} steptow={steptow} />

    </>
  );
}
