import Ember from 'ember';

let posts = [{
      id: 1,
      date: 'Apr-04-2016',
      author: 'La Jolla',
      subject: 'Contracts Specialist',
      description: "The Office of Sponsored Research (OSR) serves as LJI’s coordinating office for all Government Agency or Private Foundation externally funded research project proposals submitted by LJI Faculty, Instructors,Postdoctoral Fellows, and Graduate Students."
    }, {
      id: 2,
      date: 'Mar-03-2016',
      author: 'Evollium',
      subject: 'Administrative Assistant',
      description: "Evollium is a service provider specialized in the Telecommunications industry. Our experts leverage more than 15 years of experience and methodologies, and best practices to help our customers successfully tackle their challenges."

    }, {
      id: 3,
      date: 'Dec-17-2015',
      author: ' Ativa Medical',
      subject: 'Document Control Administrator',
      description: "Manage the variety of company documents and records, ensuring accuracy, quality and integrity, while utilizing a web-based project management and document control system."
    }, {
      id: 4,
      date: 'Mar-11-2014',
      author: 'University of Louisville',
      subject: 'Program Manager Position',
      description: "In addition, a qualified candidate will prepare study reports for the Service Center customers and provide support for the CPM grants by preparing estimates for experiments and requested grant forms. This person will also prepare marketing materials for clients and represent the CPM at booths when necessary."
}];

export default Ember.Route.extend({
  model() {
    return posts;
  }
});
