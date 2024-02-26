import os
from tokenize import String
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
import django
django.setup()

from rest_server.models import Service, Tag, Event

essential_dimensions = {'Product', 'Phase', 'Value', 'CreatorTeam', 'Role'}

dimension_texts = {
    'Product': '[Product] Add a tag for the product the insight is related to.',
    'Phase': '[Phase] Specify which phase of the software life cycle the insight is for.',
    'Value': '[Value] Tag which value cluster [Link] the insight improves.',
    'CreatorTeam' : '[CreatorTeam] Assign the insight to one or more teams who created it for more transparency.',
    'Role': '[Role] Specify who the insight is for (Scrum Master, Developer, Architect, ProductOwner, Release Manager, Tester)'
}

def create_improvement_string(service:Service) -> str:
    specified_dimensions = set([tag.type for tag in service.tags.all()])
    missing_dimensions = essential_dimensions.difference(specified_dimensions)
    output_string = '\n'.join([dimension_texts.get(dimension, False)  for dimension in missing_dimensions if dimension_texts.get(dimension, False)]).rstrip()
    if len(missing_dimensions) == 0:
        output_string += 'Nothing to improve!'
    return output_string


def get_tag_completeness_score(service:Service) -> float:
    specified_dimensions = set([tag.type for tag in service.tags.all()])
    return len(essential_dimensions.intersection(specified_dimensions))/len(essential_dimensions)

