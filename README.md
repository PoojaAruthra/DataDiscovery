# DAC Starting Page

URL: https://discovery.dainsights.public.siemens.com

API Endpoint: https://discovery.dainsights.public.siemens.com/api



# Architecture and Code

## Frontend and Backend Code

```
┌───────────────────┐           ┌──────────────────────┐    ┌──────────────────────┐
│     Frontend      │           │        Backend       │    │       Database       │
│                   │           │                      │    │   Azure SQL Server   │
│      Angular      │           │       Django         │    │                      │
│         +         │           │          +           │    │                      │
│     TypeScript    │           │       Python         │    └──────────────────────┘
│                   │           │                      │    ┌──────────────────────┐
│                   │           │                      │    │     Image Blob       │
│                   │           │    Azure Appservice  │    │     Azure Storage    │
│                   │           │                      │    │                      │
│                   │           │                      │    └──────────────────────┘
│                   │           │                      │
│                   │           │                      │
│                   │           │                      │
│                   │           │                      │
└───────────────────┘           └──────────────────────┘
```


## Flow of Information
```mermaid
sequenceDiagram
    Client (SPA)->>+Server(Django): Request Site
    Server(Django)->>-Client (SPA): Return Angular Site
    Client (SPA) ->>+ Server(Django): Request Data (REST, JSON)
    Server(Django) ->>+ Database: Request Data (SQL)
    Database ->>- Server(Django): Return Data (JSON)
    Server(Django) ->>- Client (SPA): Return Data (REST, JSON)
```

## Models and Data Structure

```mermaid
    classDiagram
        Product
        Service <-- Tag
        Service <-- Recommendation
        Tag
        Recommendation <-- Siemens User
        SiemensUser
        Team
        Role
        Event

        class Product{
            +uuid id
            +string name 
            +string description
            +string image_name
        }
        class Service{
            +uuid id
            +string name
            +string description
            +string access_url
            +string documentation_url
            +bool is_recommended
            +string image_name
            +tag[] tags
            +recommendation[] recommendations
        }
        class Tag{
            +uuid id
            +string type
            +string name
        }
        class Recommendation{
            +uuid id
            +siemensUser person
            +datetime created
            +string reason
            +float score

        }
        class SiemensUser{
            +string username
            +string email
            +string given_name
            +string family_name
            +string gid
            +string org_code
            +boolean is_staff       
        }
        class Team{
        
        }
        class Role{
        
        }
        class Event{
        
        }
        
        

```

## Frontend Structure

The frontend is based on Angular using the Siemens Brand version of (SiMPL)[https://simpl.code.siemens.io/simpl-siemens-brand/].
All code is in the mysite/angular-frontend folder.  
The Angular Code is structured into
- Components -> Visual and functional code for displaying data 
- Interfaces -> Definition of data classes (used for definition of frontend model classes)
- Services -> Code to call rest endpoint with Rest Requests


# Deployment

```mermaid
sequenceDiagram
    Code Repository->>+ Developer Machine: Clone or Pull Repository
    Developer Machine->>+ Code Repository: Commit and Push Changes
    Developer Machine->>+ Staging Slot: Load Changes into Staging slot
    Staging Slot ->>+ Production Slot: Switch Staging and Production slot
```

## Important Information:
-  Static Assets need to be collected before changes are loaded into staging slot : `python manage.py collectstatic` [Docs](https://docs.djangoproject.com/en/4.2/ref/contrib/staticfiles/) 
