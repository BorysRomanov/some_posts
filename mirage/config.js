export default function() {
  this.namespace = '/api';

  this.get('/posts', function() {
    return {
      data: [{
        type: 'post',
        id: 'contracts-specialist',
        attributes: {
          title: 'Contracts Specialist',
          author: 'La Jolla',
          date: 'Apr-04-2016',
          subject: 'Contracts Specialist',
          description: "The Office of Sponsored Research (OSR) serves as LJI’s coordinating office for all Government \
          Agency or Private Foundation externally funded research project proposals submitted by LJI Faculty, \
          Instructors,Postdoctoral Fellows, and Graduate Students."
        }
      }, {
        type: 'post',
        id: 'administrative-assistant',
        attributes: {
          title: 'Administrative Assistant',
          author: 'Evollium',
          date: 'Mar-03-2016',
          subject: 'Administrative Assistant',
          description: "Evollium is a service provider specialized in the Telecommunications industry. Our experts \
          leverage more than 15 years of experience and methodologies, and best practices to help our customers \
          successfully tackle their challenges."
        }
      }, {
        type: 'post',
        id: 'document-control-administrator',
        attributes: {
          title: 'Document Control Administrator',
          author: 'Ativa Medical',
          date: 'Dec-17-2015',
          subject: 'Document Control Administrator',
          description: "Manage the variety of company documents and records, ensuring accuracy, quality and integrity, \
          while utilizing a web-based project management and document control system."
        }
      }, {
        type: 'post',
        id: 'program-manager-position',
        attributes: {
          title: 'Program Manager Position',
          author: 'University of Louisville',
          date: 'Mar-11-2014',
          subject: 'Program Manager Position',
          description: "In addition, a qualified candidate will prepare study reports for the Service Center customers \
          and provide support for the CPM grants by preparing estimates for experiments and requested grant forms. \
          This person will also prepare marketing materials for clients and represent the CPM at booths when necessary."
        }
      }]
    };
  });
}
