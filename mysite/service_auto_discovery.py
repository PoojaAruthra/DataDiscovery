import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
import django
django.setup()

from rest_server.models import Service, Tag

services = Service.objects.all()
for service in services:
    print(service.name, [tag.name for tag in service.tags.all()])



import tableauserverclient as TSC

PROJECT_TARGET_LIST = ['Telemetry', 'Development Support', 'Teams']
TABLEAU_SITE_STUB = 'tableau-hopsec.siemens.com'

# Get all Tableau Services
tableau_auth = TSC.PersonalAccessTokenAuth('discovery_service', '', site_id = 'DPLM' )
server = TSC.Server('https://tableau-hopsec.siemens.com', use_server_version=True)
server.add_http_options({'verify': True})

project_list = []
class TableauService:
    def __init__(self, workbook, name) -> None:
        self.workbook = workbook
        self.name = name
        self.access_url = self.view_content_url_get_absolute(self.workbook.views[0].content_url)
        
        self.documentation_url = ''
        for view in self.workbook.views:
            if(view.name == 'Report Information'):
                self.documentation_url = self.view_content_url_get_absolute(view.content_url)

    def view_content_url_get_absolute(self, content_url):
        url = 'https://' + TABLEAU_SITE_STUB + '/#/site/DPLM/views/' + content_url.replace('sheets/','')
        return url
      
# Read all Tableau Reports from the Server
with server.auth.sign_in(tableau_auth):
    
    all_workbooks_items, pagination_item = server.workbooks.get()
    # print names of first 100 workbooks
    for workbook in all_workbooks_items:
        server.workbooks.populate_views(workbook, usage=True)
        server.workbooks.populate_preview_image(workbook)

        if workbook.project_name in PROJECT_TARGET_LIST:
            workbook_object = TableauService(workbook, workbook.name)
            project_list.append(workbook_object)
           
            with open('./mysite/static/img/service_previews/{}.png'.format(workbook.name), "wb") as image_file:
                image_file.write(workbook.preview_image)

for project in project_list:
    print(project.name, project.access_url, project.documentation_url)


# Match and save Tableau Reports to the Database
for project in  project_list:
    
    matching_services = Service.objects.filter(name = project.name)
    if (len(matching_services)):
        print('Found:', project.name)
    else:
        print('Not Found:', project.name)
        service = Service.objects.create(name = project.name, description = '', access_url = project.access_url, documentation_url = project.documentation_url, is_recommended = False )
        service.save()

        t_digiplm = Tag.objects.filter(name = 'DigiPLM').first()
        t_tableau = Tag.objects.filter(name = 'Tableau').first()
        t_dashboard = Tag.objects.filter(name = 'Dashboard').first()
        service.tags.add(t_digiplm)
        service.tags.add(t_tableau)
        service.tags.add(t_dashboard)
        service.save()



