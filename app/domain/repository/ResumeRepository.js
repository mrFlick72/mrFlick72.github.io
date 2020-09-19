export default class {

    getPersonalDetails() {
        return {
            "firstName": "Valerio",
            "lastName": "Vaudi",
            "address": "Ennio Ferrari street",
            "zip": "22100",
            "city": "Como",
            "region": "Como",
            "mail": "valerio.vaudi@gmail.com",
            "mobile": "3392381976",
            "skype": "valerio8800",
            "birthDate": "14/12/1985",
            "state": "Italy",
            "sex": "Male",
            "taxCode": "VDAVLR85T14A323Q"
        }
    }

    getEducationDetails() {
        return [
            {
                "title": "Università degli studi di Roma La Sapienza",
                "type": "Master degree",
                "date": "27/07/2017"
            },
            {
                "title": "Università degli studi di Roma La Sapienza",
                "type": "Barchelor’s degree",
                "date": "25/01/2010"
            },
            {
                "title": "Liceo scientifico 'Innocenzo XII' Anzio",
                "type": "High school",
                "date": "2003/2004"
            },
            {
                "title": "Spring Core",
                "type": "Course",
                "date": "27/11/2012 – 30/11/2012"
            },
            {
                "title": "Enterprise Integration With Spring",
                "type": "Course",
                "date": "19/05/2014 – 22/05/2014"
            },
            {
                "title": "Spring Web",
                "type": "Course",
                "date": "14/10/2016 – 18/10/2016"
            },
            {
                "company": "Pivotal",
                "title": "SpringSource Certified Spring Web Application Developer",
                "type": "Certification",
                "date": "30/12/2016"
            },
            {
                "company": "Liferay, Prometric",
                "title": "Certified Professional Developer Liferay Portal 6.2",
                "type": "Certification",
                "date": "22/12/2016"
            },
            {
                "company": "VMware, License PearsonVUE",
                "title": "SpringSource Certified Enterprise Integration Specialist",
                "type": "Certification",
                "date": "24/07/2014"
            },
            {
                "company": "VMware, License PearsonVUE",
                "title": "SpringSource Certified Spring Professional",
                "type": "Certification",
                "date": "08/11/2013"
            }
        ]
    }

    getSkillDetails() {
        return [
            {
                "familyName": "Deign an Architectures",
                "value": ["Microservices", "SOA", "Domain-Driven Design", "Hexagonal Architecture", "T.D.D.", "REST","Web Service (SOAP)"]
            },
            {"familyName": "Agile", "value": ["Scrum", "Kanban"]},
            {"familyName": "System Engineering", "value": ["Ansible", "Docker", "Kubernetes"]},
            {"familyName": "Cloud", "value": ["Amazon Web Service (AWS)"]},
            {"familyName": "Security", "value": ["OAuth2", "OpenId Connect"]},
            {"familyName": "Languages", "value": ["Java", "Kotlin", "JavaScript", "SQL"]},
            {"familyName": "JS Ecosystem", "value": [" ReactJS", "ES6"]},
            {"familyName": "Java Ecosystem", "value": ["JavaEE", "Apache Maven", "Reactor"]},
            {
                "familyName": "Spring Ecosystem", "value": ["Spring Core",
                    "Spring Web",
                    "Spring WebFlux",
                    "Spring Security",
                    "Spring Integration",
                    "Spring Data(JPA, MongoDB, Cassandra)",
                    "Spring Boot",
                    "Spring Cloud"]
            }
        ]
    }


    getWorkExperienceDetails() {
        return [
            {
                "company": "Lastminute.com Group",
                "startActivityDate": "04/12/2017",
                "endActivityDate": "today",
                "commitments": ["Customer Area/Order Management System", "Hotel Search Funnel"],
                "jobDescription": "I am involved into\n" +
                "maintenance, evolving and develop of all\n" +
                "post sale customer area and order\n" +
                "management products of Lastminute.com\n" +
                "group. Mainly I work with Scrum and/or Kamban Agile frameworks in a fully\n" +
                "agile environment. The team therefore is\n" +
                "involved in all the typical ceremonies like:\n" +
                "planning, product refinement, sprint\n" +
                "review and so on."
            },
            {
                "company": "Sourceense",
                "startActivityDate": "16/11/2015",
                "endActivityDate": "16/11/2017",
                "commitments": ["JAVA EE & Spring Ecosystem Specialist",
                    "Software Developer", "Microservices architecture style pre-sales",
                    "Technical leadership on Liferay product"],
                "jobDescription": "The my principal commitments was on\n" +
                "Liferay Portal and Microservice Architecture style Pre-Sale. I was one of\n" +
                "the key people during the Tripy-Evo and\n" +
                "Trade portal development for AXA."
            },
            {
                "company": "Geo-Consulting",
                "startActivityDate": "11/06/2012",
                "endActivityDate": "13/11/2015",
                "commitments": ["J2EE & Spring Specialist", "Software Analyst & Architect", "Fast Software Prototype"],
                "jobDescription": "In Geo-Consulting I was involved in many\n" +
                "activities like poc development, software\n" +
                "analyst, design software architecture and\n" +
                "so on. The more valuable product\n" +
                "developed was a transaction manager for\n" +
                "SAP. It was developed on top of the official\n" +
                "SapJCo, this module was the foundation\n" +
                "for almost all integration projects\n" +
                "between SAP and the external “World”\n" +
                "like Afresco, Magento and custom\n" +
                "systems. I was also the technical\n" +
                "leader/coach for all the new junior\n" +
                "engineer hired in the company."
            }]
    }

    getLanguages() {
        return {
            "mainLanguage": "Italian",
            "otherLanguages": [
                {
                    "languageName": "English",
                    "understanding": {
                        "listening": "B2",
                        "reading": "B2"
                    },
                    "speaking": {
                        "spokenInteraction": "B2",
                        "spokenProduction": "B2"
                    },
                    "writing":
                        {
                            "writing": "B2"
                        }
                }
            ]
        }
    }
}