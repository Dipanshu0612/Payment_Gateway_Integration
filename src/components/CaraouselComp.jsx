import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComp() {
  return (
    <Carousel fade className='my-2'>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Events</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Organize Events, Allowing Students To Learn From The Masters In Their Fields. Get Inspired. Through Stories And Workshops, We Show Them Feasibility Of Big Dreams.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Internships</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Conduct Internship Program To Help Students Be Ready For What Is Coming To Them In Their Career Ahead. To Know More About The GRIP Program, Scroll Down.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Mentorship</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Help Students And Enable Them To Move Forward, Get Unstuck From Any Unfavorable Situation. We Keep An Alternative Channel Open Always To Help Them, When School And People Around Are Not Enough.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Support</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Connect Them To Available Resources. We Support Students When There Is None Available.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Scholarship</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Provide Financial Assistance To Meritorious And Deserving Students. We Provide Prizes, Motivating Students To Bring Out Their Best.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='bg-black'>
        <img
          className="h-[30rem] opacity-40 d-block w-100"
          src="https://img.freepik.com/premium-photo/laptop-books-table-education_41078-116.jpg"
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3 className='text-[2.5rem]'>Community</h3>
          <p className='text-yellow-300 text-[1.5rem]'>We Have Built A Community Of Sharing Knowledge, Helping Each Other. We Encourage Asking For Help, And Let Inner Desire Drive Students To Success.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}