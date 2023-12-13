import React, { Component } from "react";
 import AlertMsg from '../Global/AlertMsg';
 
// import LoadingGif from '../Global/LoadingGif';
import background from '../../CssComponents/LoginPage/images/backgroundLogin.jpeg';
import imgRestaurante from '../../CssComponents/Reservas/NovaReservaPage/images/imgRestaurante.jpg'
import '../../CssComponents/Reservas/NovaReservaPage/css/style.css'
import '../../CssComponents/LoginPage/vendor/bootstrap/css/bootstrap.min.css';
import '../../CssComponents/LoginPage/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../CssComponents/Reservas/NovaReservaPage/js/custom.js'
// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import moment from 'moment';
// import 'react-big-calendar/lib/sass/agenda.scss';
// import 'react-big-calendar/lib/sass/event.scss';
// import 'react-big-calendar/lib/sass/month.scss';
// import 'react-big-calendar/lib/sass/reset.scss';
// import 'react-big-calendar/lib/sass/styles.scss';
// import 'react-big-calendar/lib/sass/time-column.scss';
// import 'react-big-calendar/lib/sass/time-grid.scss';
// import 'react-big-calendar/lib/sass/toolbar.scss';
// import 'react-big-calendar/lib/sass/variables.scss';

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';
// const localizer = momentLocalizer(moment);
// const myEventsList = [
//     { 
//         title: 'My Event',start: new Date('2023-12-12T13:45:00-05:00'), end: new Date('2023-12-12T14:00:00-05:00')
//     },
//     { 
//         title: 'My Event',start: new Date('2023-12-18T13:45:00-05:00'), end: new Date('2023-12-18T14:00:00-05:00')
//     },
//   ];

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

// import "@fullcalendar/core/main.css";
// // import "@fullcalendar/resource-daygrid/main.css";

// import "@fullcalendar/core/main.css";
// // import "@fullcalendar/resource-daygrid/main.css";

import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

class NovaReserva extends Component {
  calendarComponentRef = React.createRef();
  constructor() {
    super();
    this.state = {
        events: [
            { id: 1, title: "event 1", date: "2023-12-01" },
            {
              title: "event 2",
              start: "2023-12-01",
              end: "2023-12-05",
              allDay: true,
              HostName: "William"
            },
            {
              title: "event 3",
              start: "2023-12-05",
              end: "2023-12-07",
              allDay: true
            },
            {
              title: "event 4",
              start: "2023-12-05",
              end: "2023-12-07",
              allDay: true
            },
            {
              title: "event 5",
              start: "2023-12-05",
              end: "2023-12-07",
              allDay: true
            },
            {
              title: "event 6",
              start: "2023-12-05",
              end: "2023-12-07",
              allDay: true
            }
          ],
      alertText: "",
      alertisNotVisible: true,
      alertColor: "danger",
      dataGet: [],
      dataPost: [],
      dataDistritos : [],
      dataConcelhos : [],
      dataSistemas : [],
      filter:"",
      isHidden: false
    }
    this.getDistritos();
  }

  
  componentDidMount() {

  }
 
  handleDateClick = arg => {
    alert(arg.dateStr);
  };

  handleSelectedDates = info => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };
      const data = [...this.state.events, newEvent];
      this.setState({ events: data });
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };

  getConcelho = async event => {
    const postData = {
        distrito:event.target.value,
        token:sessionStorage.getItem('token')
    };
       //Enviar pedidos
         const response = await fetch('http://192.168.1.85:8000/data/concelhos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        });
        //Aguardar API
        await response.json().then(resp => {
            let status = resp.status;
            switch (status) {
                case "OK":
                    this.setState({ dataConcelhos: resp.response });
                    break;
                default:
                    console.log(this.state.alertText)
                break;
            }

        });

  }


    async getDistritos() {
        const response = await fetch('http://192.168.1.85:8000/data/distritos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('token')
            },
        });
        //Aguardar API
        await response.json().then(resp => {
            let status = resp.status;
            switch (status) {
                case "OK":
                    this.setState({ dataDistritos: resp.response });
                    break;
                default:
                    console.log(this.state.alertText)
                break;
            }

        });

    }


      handleWeekendsToggle = () => {
        this.setState({
          weekendsVisible: !this.state.weekendsVisible
        })
      }
    
      handleDateSelect = (selectInfo) => {
        alert("teste");
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: 1,
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
      }
    
      handleEventClick = (clickInfo) => {
          clickInfo.event.remove()
        
      }
    
      handleEvents = (events) => {
        this.setState({
          currentEvents: events
        })
      }
    
    
    
     renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    }
    
     renderSidebarEvent(event) {
      return (
        <li key={event.id}>
          <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
          <i>{event.title}</i>
        </li>
      )
    }    

    getReservasWithFilters = async e => {
        e.preventDefault();
        const postData = {
            distrito:document.getElementById('distrito').value,
            concelho:document.getElementById('concelho').value,
            token:sessionStorage.getItem('token')
        };
           //Enviar pedidos
             const response = await fetch('http://localhost:8000/gestao/getSistema', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });
            //Aguardar API
            await response.json().then(resp => {
                let status = resp.status;
                switch (status) {
                    case "OK":
                        this.setState({ dataSistemas: resp.response.sistemaRows });
                        break;
                    case "No data":
                        alert("no data");
                        break;
                    default:
                        console.log(this.state.alertText)
                    break;
                }
    
            });
    

    }

    filterSistema = async (tipoSistema) => {
        var currentAll = document.getElementsByClassName("categories")[0];
        var currentRestaurante = document.getElementsByClassName("categories")[1];
        var currentCampos = document.getElementsByClassName("categories")[2];
        // current[0].className = current[0].className.replace(" active", "");
        // this.className += " active";
        if(tipoSistema == '1'){
            currentAll.className = "categories";
            currentRestaurante.className = "categories";
            currentCampos.className = "categories active";
            this.setState({filter:"1"});
        }
        if(tipoSistema == '2'){
            currentAll.className= "categories";
            currentRestaurante.className = "categories active";
            currentCampos.className= "categories";
            this.setState({filter:"2"});
        }
        if(tipoSistema == 'All'){
            currentAll.className = "categories active";
            currentRestaurante.className= "categories";
            currentCampos.className= "categories";
            this.setState({filter:"All"});
        }

    }
  render() {
    return (
<div>
<div class="content">
    <br></br>
    <br></br>

<div class="container">
    	<div class="row">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30 text-center">
                        <h2>Nova Reserva</h2>
                        </div>
                        </div>
	<div class="row">
	
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb30">
                        <div class="tour-booking-form">
                            <form onSubmit={this.getReservasWithFilters}>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                        <h4 class="tour-form-title">Dados da Reserva</h4>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label required" for="select">Distrito</label>
                                            <div class="select">
                                                <select id="distrito" name="select" class="form-control" onChange={this.getConcelho} required>
                                                    <option value="" selected="selected">Escolha o distrito</option>
                                                    {
                  this.state.dataDistritos.map((data, index) => {
                    return (

                <option key={index}value={data.nome}>{data.nome}</option>
                    )
                  })
                }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                        <div class="form-group">
                                            <label class="control-label" for="datepicker">Concelho</label>
                                            <div class="select">
                                            <select id="concelho" name="select" class="form-control"  required>
                                                    <option value="">Escolha o concelho</option>
                                                    {
                  this.state.dataConcelhos.map((data, index) => {
                    return (

                <option key={index}value={data.municipio}>{data.municipio}</option>
                    )
                  })
                }

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        
                                        <button  class="btn btn-primary">Pesquisar Reservas <i class="fa fa-search" style={{paddingRight:"5px"}} ></i></button>
                                        <AlertMsg
                    text={this.state.alertText}
                    isNotVisible={this.state.alertisNotVisible}
                    alertColor={this.state.alertColor}
                />

                                    </div>
                                </div>
                                </form>
                        </div>
                        
                    </div>
	</div>
		<div class="row">
</div>
</div>
</div>

<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <ul class="col container-filter portfolioFilte list-unstyled mb-0" id="filter">
                        <li><a class="categories active" data-filter="*" onClick={() => this.filterSistema('All')}>All</a></li>
                        <li><a class="categories" data-filter=".branding"  onClick={() => this.filterSistema('2')}>Restaurantes</a></li>
                        <li><a class="categories" data-filter=".design"onClick={() => this.filterSistema('1')}>Campos Desportivos</a></li>
                        <li><a class="categories" data-filter=".photo" onClick={() => this.filterSistema('Outros')}>Outras Reservas</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="port portfolio-masonry mt-4">
            <div class="portfolioContainer row photo">

                    {      
                      (this.state.filter=="All") ? (
                      this.state.dataSistemas.map((data, index) => {
                        return (
    
                            <div key={index} class="col-lg-4 p-4 branding photo">
                            <div class="item-box">
                                <div class="row">
                                <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                                    <img class="item-container img-fluid" src={imgRestaurante} width={"800px"} alt=""></img>
                                </a>
                                <div class="col">
                                    <br></br>
                                <center style={{paddingLeft:"5px"}}>{data.NomeSistema}</center>
                                </div>
                                </div>
                                <hr></hr>
                                <div class="row">
                                <div class="col-1"></div>
                                <div class="col">
                                <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Reservar</button>
                                </div>
                                <div class="col">
                                <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Ver Mais</button>
                                </div>
                                </div>                    
                                <br></br>
                            </div>
                        </div>
                            )
                      })
                      ):(
                        this.state.dataSistemas.filter(sistema => sistema.TipoSistema.includes(this.state.filter)).map((data, index) => {
                            return (
        
                                <div key={index} class="col-lg-4 p-4 branding photo">
                                <div class="item-box">
                                    <div class="row">
                                    <a class="mfp-image" href="https://www.bootdey.com/image/800x540/D3D3D3/000000" title="Project Name">
                                        <img class="item-container img-fluid" src={imgRestaurante} width={"800px"} alt=""></img>
                                    </a>
                                    <div class="col">
                                        <br></br>
                                    <center style={{paddingLeft:"5px"}}>{data.NomeSistema}</center>
                                    </div>
                                    </div>
                                    <hr></hr>
                                    <div class="row">
                                    <div class="col-1"></div>
                                    <div class="col">
                                    <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Reservar</button>
                                    </div>
                                    <div class="col">
                                    <button type="button" class="btn btn-danger" style={{marginLeft:"2px"}}>Ver Mais</button>
                                    </div>
                                    </div>                    
                                    <br></br>
                                </div>
                            </div>
                                )
                          })
                          )
                      
                    }




            </div>
        </div>
    </div>
</section>
{(window.innerWidth > 500) ? (
    <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={this.state.events} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChangess={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>

):(
    <div className='demo-app'>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView='timeGridDay'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={this.state.events} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChangess={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>

)}
</div>

    );
  }
  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.events.length})</h2>
          <ul>
            {this.state.events.map(this.renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }
  
}

export default NovaReserva;