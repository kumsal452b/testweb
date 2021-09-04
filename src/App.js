import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Button, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base.js';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './data';
import image from './image.png'
import { FaBeer } from "react-icons/fa";
import { BsLock, BsHouse } from "react-icons/bs";
export default class App extends SampleBase {
  constructor() {
    super(...arguments);
    this.dataTypes = [
      { Type: 'Over', value: 'Over' },
      { Type: 'Push', value: 'Push' },
      { Type: 'Slide', value: 'Slide' },
      { Type: 'Auto', value: 'Auto' }
    ];
    this.fields = { text: 'Type', value: 'value' };
    this.showBackdrop = false;
    this.closeOnDocumentClick = false;
    this.waterMark = 'Select a Type';
    this.height = '220px';
    this.index = 3;
    this.taskFields = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.labelSettings = {
      leftLabel: 'TaskName'
    };
    this.projectStartDate = new Date('03/24/2019');
    this.projectEndDate = new Date('07/06/2019');
  }

  render() {
    return (
      <div>

        <div className="control-section">
          <div className="col-lg-12 col-sm-12 col-md-12 center">
            Click/Touch the button to view the sample
          </div>
          <div className="col-lg-12 col-sm-12 col-md-12 center">
            <a className="e-btn" id="newTab" onClick={this.newTabClick.bind(this)} target="_blank">Open in new tab</a>
          </div>
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs e-justify-center e-align " style={{ backgroundColor: '#61dafb', padding: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <li class="nav-item" style={{ marginBottom: 40, marginRight: 20 }}>
                  <span id="hamburger" className="e-icons menu" onClick={this.openClick.bind(this)}></span>
                </li>
                <li class="nav-item" style={{ marginLeft: 40 }}>
                  <a class="nav-link active" href="#">Active tab</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tab</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled tab</a>
                </li>
              </ul>
            </div>
          </div>
          <div id="wrapper">
            <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">


              <SidebarComponent id="default-sidebar" ref={Sidebar => this.sidebarInstance = Sidebar}>
                <div className="title-header">

                  <span id="close" className="e-icons" onClick={this.closeClick.bind(this)}></span></div>
                <div className="sub-title">

                  <div>
                    <img src={image} className="photo" style={{ width: 200, height: 200, borderRadius: 30 }} />
                  </div>
                  <hr />
                  <ButtonComponent className="button" style={{ marginBottom: 20 }}>
                    <div className="buttonIcon">

                      Ana Sayfa
                    </div>
                  </ButtonComponent>
                  <br />
                  <ButtonComponent className="button" style={{ marginBottom: 20 }} >
                    Ayarlar
                  </ButtonComponent>
                  <br />
                  <ButtonComponent className="button"  >
                    Cikis
                  </ButtonComponent>
                </div>
              </SidebarComponent>
              <div className="list-group">
                <div className="list-group-item">
                  <h2 className="title"></h2><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='control-pane'>

          <div className='control-section'>
            <GanttComponent id='Default' dataSource={projectNewData} taskFields={this.taskFields} labelSettings={this.labelSettings} height='410px' projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate}>
              <Inject services={[Selection]} />
            </GanttComponent>
          </div>

        </div>
      </div>

    );
  }
  // open new tab
  newTabClick() {

    // let URL = location.href.replace(location.search, '');
    // document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/api/index.html');
  }
  toggleSidebar() {
    this.sidebarInstance.toggle();
  }
  //close the siebar
  closeClick() {
    this.sidebarInstance.hide();
  }
  //open the sidebar
  openClick() {
    this.sidebarInstance.show();
  }
  documentclick() {
    let proxy = this;
    if (proxy.documentClickBtn.element.classList.contains('e-active')) {
      proxy.documentClickBtn.content = 'False';
      //enable the closeOnDocumentClick property
      this.sidebarInstance.closeOnDocumentClick = true;
    }
    else {
      proxy.documentClickBtn.content = 'True';
      //disable the closeOnDocumentClick property
      this.sidebarInstance.closeOnDocumentClick = false;
    }
  }
  ;
  onTypeChange() {
    let proxy = this;
    if (proxy.sidebarTypesBtn.element.classList.contains('e-active')) {
      proxy.sidebarTypesBtn.content = 'Left';
      this.sidebarInstance.position = 'Right';
      document.getElementById('hamburger').className += " e-rtl";
    }
    else {
      proxy.sidebarTypesBtn.content = 'Right';
      this.sidebarInstance.position = 'Left';
      document.getElementById('hamburger').classList.remove("e-rtl");
    }
  }
  ;
  backdrop() {
    let proxy = this;
    if (proxy.backdropBtn.element.classList.contains('e-active')) {
      proxy.backdropBtn.content = 'False';
      //enable the backdrop property
      this.sidebarInstance.showBackdrop = true;
    }
    else {
      proxy.backdropBtn.content = 'True';
      //disable the backdrop property
      this.sidebarInstance.showBackdrop = false;
    }
  }
  ;
  onChange() {
    let types = this.listObj.value;
    this.sidebarInstance.type = types;
  }
}

render(<App />, document.getElementById('root'));