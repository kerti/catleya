angular.module('Catleya')
.factory('ConfigService', function() {
  return {
    get: function() {
      var config = 
        {
          lights: [
            {
              name: 'Front Porch',
              auto: false,
              state: 'on'
            },
            {
              name: 'Back Porch',
              auto: false,
              state: 'off'
            },
            {
              name: 'Driveway Light',
              auto: true,
              state: 'on',
              timers: [
                {
                  start: '17:45',
                  end: '06:15'
                }
              ]
            },
            {
              name: 'Garage',
              auto: true,
              state: 'on',
              timers: [
                {
                  start: '17:45',
                  end: '21:00'
                },
                {
                  start: '05:45',
                  end: '06:30'
                }
              ]
            },
            {
              name: 'Front Yard Sprinklers',
              auto: true,
              state: 'off',
              timers: [
                {
                  start: '23:30',
                  end: '23:45'
                }
              ]
            }
          ]
        };
      return config;
    }
  };
});