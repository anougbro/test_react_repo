

#Contact Search System Using Data Structures
# Contact class
class Contact:
    def __init__(self, name, phone):
        self.name = name
        self.phone = phone


# Node for Doubly Linked List
class Node:
    def __init__(self, contact):
        self.contact = contact
        self.prev = None
        self.next = None


# Doubly Linked List
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_contact(self, contact):
        new_node = Node(contact)

        if not self.head:
            self.head = self.tail = new_node
        else:
            self.tail.next = new_node
            new_node.prev = self.tail
            self.tail = new_node

    def display_forward(self):
        current = self.head
        if not current:
            print("No contacts.")
            return

        while current:
            print(f"{current.contact.name} - {current.contact.phone}")
            current = current.next

    def display_backward(self):
        current = self.tail
        if not current:
            print("No contacts.")
            return

        while current:
            print(f"{current.contact.name} - {current.contact.phone}")
            current = current.prev


# Naive substring search
def substring_search(text, pattern):
    text = text.lower()
    pattern = pattern.lower()

    for i in range(len(text) - len(pattern) + 1):
        if text[i:i+len(pattern)] == pattern:
            return True
    return False


# Main system
class ContactManager:
    def __init__(self):
        self.contacts_list = DoublyLinkedList()
        self.contacts_dict = {}  # hash table

    def add_contact(self, name, phone):
        contact = Contact(name, phone)
        self.contacts_list.add_contact(contact)
        self.contacts_dict[name.lower()] = contact
        print("Contact added.")

    def search_by_keyword(self, keyword):
        found = False
        current = self.contacts_list.head

        while current:
            if substring_search(current.contact.name, keyword):
                print(f"Match found: {current.contact.name} - {current.contact.phone}")
                found = True
            current = current.next

        if not found:
            print("No matches found.")

    def search_by_name(self, name):
        contact = self.contacts_dict.get(name.lower())
        if contact:
            print(f"Found: {contact.name} - {contact.phone}")
        else:
            print("Contact not found.")

    def display_forward(self):
        self.contacts_list.display_forward()

    def display_backward(self):
        self.contacts_list.display_backward()


# Menu system
def main():
    manager = ContactManager()

    while True:
        print("\n1. Add Contact")
        print("2. Search by Keyword")
        print("3. Search by Exact Name")
        print("4. View All (Forward)")
        print("5. View All (Backward)")
        print("6. Exit")

        choice = input("Enter option: ")

        if choice == "1":
            name = input("Name: ")
            phone = input("Phone: ")
            manager.add_contact(name, phone)

        elif choice == "2":
            keyword = input("Search keyword: ")
            manager.search_by_keyword(keyword)

        elif choice == "3":
            name = input("Enter exact name: ")
            manager.search_by_name(name)

        elif choice == "4":
            manager.display_forward()

        elif choice == "5":
            manager.display_backward()

        elif choice == "6":
            print("Goodbye!")
            break

        else:
            print("Invalid option. Try again.")


# Run program
if __name__ == "__main__":
    main()