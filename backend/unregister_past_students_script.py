# import requests
# base_url = "http://10.192.104.68:5000"
# headers = {"Content-Type": "application/json"}
# admin_token = "firmianawaittheydontloveyoulikeiloveyouwaittheydontloveyoulikeiloveyou5ZzROOKeBo2dCVsuxb0qvNBvObaIYeRn"

# # UNREGISTER STUDENTS FROM COURSES
# # Methodology: Unregister all students, check that no students are registered, and verify that the two students previously registered are no longer registered.

# # Define URLs
# get_students_url = f"{base_url}/getAllStudentsRegisteredForClass/{{}}"
# unregister_url = f"{base_url}/unregisterFromClassWithIndex/{{}}"
# get_classes_url = base_url + "/get_classes/"

# # Step 1: Unregister all students from classes (indices 0 to 99)
# for index in range(100):
#     # Indices 0 to 99
#     unregister_url_with_index = unregister_url.format(index)
#     get_students_url_with_index = get_students_url.format(index)

#     # Step 2: Get all students registered for the class at the current index
#     response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
#     if response.status_code == 200:
#         registered_students = response.json()
#         print(f"Students currently registered for class at index {index}: {registered_students}")
#     else:
#         print(f"Error fetching registered students for index {index}:", response.status_code, response.text)

#     # # Step 3: Unregister all students from the class at the current index
#     # unregister_data = {"token": admin_token}
#     # response = requests.put(unregister_url_with_index, headers=headers, json=unregister_data)
#     # if response.status_code == 200:
#     #     print(f"All students have been unregistered from the class at index {index}.")
#     # else:
#     #     print(f"Error unregistering students for index {index}:", response.status_code, response.text)

#     # # Step 4: Verify no students are registered for the class at the current index
#     # response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
#     # if response.status_code == 200:
#     #     registered_students = response.json()
#     #     if len(registered_students) == 0:
#     #         print(f"No students are registered for the class at index {index}.")
#     #     else:
#     #         print(f"There are still students registered for the class at index {index}: {registered_students}")
#     # else:
#     #     print(f"Error fetching registered students for index {index}:", response.status_code, response.text)





# # # OUTPUT CLASSES WITH WHO IS REGISTERED

# # # Define URL for getting students registered for a class at a specific index
# # get_students_url = f"{base_url}/getAllStudentsRegisteredForClass/{{}}"  # Placeholder for index

# # # Loop through all classes (indices 0 to 99)
# # for index in range(100):  # Indices 0 to 99
# #     get_students_url_with_index = get_students_url.format(index)
    
# #     # Fetch all students registered for the class at the current index
# #     response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
# #     if response.status_code == 200:
# #         registered_students = response.json()
# #         if registered_students:
# #             print(f"Students registered for the class at index {index}:")
# #             for student in registered_students:
# #                 print(f"- {student}")
# #         else:
# #             print(f"No students are registered for the class at index {index}.")
# #     else:
# #         print(f"Error fetching registered students for class at index {index}: {response.status_code}, {response.text}")

import requests
base_url = "http://10.192.104.68:5000"
headers = {"Content-Type": "application/json"}
admin_token = "firmianawaittheydontloveyoulikeiloveyouwaittheydontloveyoulikeiloveyou5ZzROOKeBo2dCVsuxb0qvNBvObaIYeRn"

# UNREGISTER STUDENTS FROM COURSES 61-67
# Methodology: Unregister all students, check that no students are registered, and verify that the two students previously registered are no longer registered.

# Define URLs
get_students_url = f"{base_url}/getAllStudentsRegisteredForClass/{{}}"
unregister_url = f"{base_url}/unregisterFromClassWithIndex/{{}}"
get_classes_url = base_url + "/get_classes/"

# Step 1: Unregister all students from classes (indices 0 to 99)
for index in range(61,68):
    unregister_url_with_index = unregister_url.format(index)
    get_students_url_with_index = get_students_url.format(index)

    response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
    if response.status_code == 200:
        registered_students = response.json()
        print(f"Students currently registered for class at index {index}: {registered_students}")
    else:
        print(f"Error fetching registered students for index {index}:", response.status_code, response.text)

    # # Step 3: Unregister all students from the class at the current index
    # unregister_data = {"token": admin_token}
    # response = requests.put(unregister_url_with_index, headers=headers, json=unregister_data)
    # if response.status_code == 200:
    #     print(f"All students have been unregistered from the class at index {index}.")
    # else:
    #     print(f"Error unregistering students for index {index}:", response.status_code, response.text)

    # # Step 4: Verify no students are registered for the class at the current index
    # response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
    # if response.status_code == 200:
    #     registered_students = response.json()
    #     if len(registered_students) == 0:
    #         print(f"No students are registered for the class at index {index}.")
    #     else:
    #         print(f"There are still students registered for the class at index {index}: {registered_students}")
    # else:
    #     print(f"Error fetching registered students for index {index}:", response.status_code, response.text)





# OUTPUT CLASSES WITH WHO IS REGISTERED

# Define URL for getting students registered for a class at a specific index
get_students_url = f"{base_url}/getAllStudentsRegisteredForClass/{{}}"  # Placeholder for index

# Loop through all classes (indices 0 to 99)
for index in range(100):  # Indices 0 to 99
    get_students_url_with_index = get_students_url.format(index)
    
    # Fetch all students registered for the class at the current index
    response = requests.get(get_students_url_with_index, headers=headers, json={"token": admin_token})
    if response.status_code == 200:
        registered_students = response.json()
        if registered_students:
            print(f"Students registered for the class at index {index}:")
            for student in registered_students:
                print(f"- {student}")
        else:
            print(f"No students are registered for the class at index {index}.")
    else:
        print(f"Error fetching registered students for class at index {index}: {response.status_code}, {response.text}")
