# Generated by Django 4.1.4 on 2023-03-08 21:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_sailuser_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sailuser',
            name='username',
        ),
    ]
