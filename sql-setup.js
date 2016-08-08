;(function () {
  let pg = require('pg')

  pg.defaults.ssl = true
  pg.connect('postgres://hbhbgbznqhllvs:zBgv_Ge9dQeEIOTkdQj_ZDlRTT@ec2-54-235-124-2.compute-1.amazonaws.com:5432/d1nbee6vs63muu', function (err, client) {
    if (err) throw err
    console.log('Connected to postgres! Getting schemas...')

    client.query(`
	CREATE TABLE Galaxies (
  id varchar(255) NOT NULL,
  name varchar(255),
  PRIMARY KEY (id)
)
`)
    client.query(`
	CREATE TABLE Stars (
		id varchar(255) NOT NULL,
		galaxyId varchar(255),
		name varchar(255),
		PRIMARY KEY (id),
		FOREIGN KEY (galaxyId) REFERENCES Galaxies (id)
	)
	`)
    client.query(`
	CREATE TABLE Planets (
		id varchar(255) NOT NULL,
		galaxyId varchar(255),
		name varchar(255),
		PRIMARY KEY (id),
		FOREIGN KEY (galaxyId) REFERENCES Galaxies (id)
	)
	`)
    client.query(`
	CREATE TABLE Moons (
		id varchar(255) NOT NULL,
		galaxyId varchar(255),
		name varchar(255),
		PRIMARY KEY (id),
		FOREIGN KEY (galaxyId) REFERENCES Galaxies (id)
	)
	`)
    client.query(`
CREATE TABLE Species (
  id varchar(255) NOT NULL,
  name varchar(255),
  PRIMARY KEY (id)
)
`)
    client.query(`
CREATE TABLE SpeciesPlanets (
  id varchar(255) NOT NULL,
  speciesId varchar(255) NOT NULL,
  planetId varchar(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (speciesId) REFERENCES Species (id),
  FOREIGN KEY (planetId) REFERENCES Planets (id)
)
`)
    client.query(`
CREATE TABLE SpeciesGalaxies (
  id varchar(255) NOT NULL,
  speciesId varchar(255) NOT NULL,
  galaxyId varchar(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (speciesId) REFERENCES Species (id),
  FOREIGN KEY (galaxyId) REFERENCES Galaxies (id)
)
`)
  })
}())
